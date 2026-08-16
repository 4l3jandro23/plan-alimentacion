// Edge Function: envía el aviso push la noche antes de un día con tupper.
// Se dispara por un cron (pg_cron + pg_net) programado en el proyecto de Supabase —
// ver supabase/PUSH-SETUP.md para la configuración manual, un único paso que no se puede hacer desde aquí.
import webpush from "npm:web-push@3.6.7";

const VAPID_PUBLIC_KEY = "BKpRdX9mnjYijjtQ_fKgQzwq9GbuVjGXV4UG0AcCgaQKDNQMPnM_aLF1FEY5AWdpUVGdcOzcljoVEVvX98B7Eyc";
const VAPID_PRIVATE_KEY = Deno.env.get("VAPID_PRIVATE_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

webpush.setVapidDetails("mailto:alejalingar@gmail.com", VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

function calDateKeyLocal(d: Date): string {
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseArr(v: unknown): any[] {
  if (typeof v !== "string") return [];
  try { const p = JSON.parse(v); return Array.isArray(p) ? p : []; } catch { return []; }
}

Deno.serve(async () => {
  const estadoRes = await fetch(`${SUPABASE_URL}/rest/v1/estado?id=eq.1&select=data`, {
    headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` },
  });
  const estadoRows = await estadoRes.json();
  const data = estadoRows[0] ? JSON.parse(estadoRows[0].data) : {};

  const wfhDays = parseArr(data.planAlimentacionWfh);
  const wfhDates = parseArr(data.planAlimentacionWfhDates);
  const bowlDays = parseArr(data.planAlimentacionBowlDays);
  const vacaciones = parseArr(data.planAlimentacionVacaciones);

  // El cron corre en UTC; calculamos "mañana" en hora de Madrid para no desfasar el día.
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayIdx = (tomorrow.getDay() + 6) % 7; // 0=Lunes...6=Domingo
  const key = calDateKeyLocal(tomorrow);

  const isWeekend = dayIdx > 4;
  const isVacation = vacaciones.some((v: any) => key >= v.start && key <= v.end);
  const isWfh = wfhDays.includes(dayIdx) || wfhDates.includes(key);
  const isBowl = bowlDays.includes(dayIdx);
  const lastDayOfMonth = new Date(tomorrow.getFullYear(), tomorrow.getMonth() + 1, 0).getDate();
  const isLastFriday = dayIdx === 4 && (tomorrow.getDate() + 7) > lastDayOfMonth;

  const needsTupper = !isWeekend && !isVacation && !isWfh && !isBowl && !isLastFriday;
  if (!needsTupper) {
    return new Response("Nada que avisar para mañana", { status: 200 });
  }

  const subsRes = await fetch(`${SUPABASE_URL}/rest/v1/push_subscriptions?select=*`, {
    headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` },
  });
  const subs = await subsRes.json();

  const payload = JSON.stringify({ title: "Plan de Alimentación", body: "🍱 Prepara el tupper para mañana." });

  let sent = 0;
  for (const s of subs) {
    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload);
      sent++;
    } catch (err: any) {
      if (err?.statusCode === 404 || err?.statusCode === 410) {
        await fetch(`${SUPABASE_URL}/rest/v1/push_subscriptions?endpoint=eq.${encodeURIComponent(s.endpoint)}`, {
          method: "DELETE",
          headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` },
        });
      }
    }
  }

  return new Response(`Avisos enviados: ${sent}`, { status: 200 });
});
