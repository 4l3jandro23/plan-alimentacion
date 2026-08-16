-- Programa la Edge Function cada noche. Requiere las extensiones pg_cron y pg_net
-- (Supabase → Database → Extensions → actívalas si no lo están ya).
-- Sustituye <ANON_KEY> por la misma clave publishable que ya usa la app
-- (SUPABASE_KEY en index.html: sb_publishable_8pdb7ItwgBzII8SMsdWjzA_kunVAiq5).
-- Hora en UTC: 20:00 UTC ≈ 21:00 en España en invierno / 22:00 en verano.
-- Ajusta la hora si lo quieres más temprano o más tarde.
select cron.schedule(
  'tupper-reminder-nightly',
  '0 20 * * *',
  $$
  select net.http_post(
    url := 'https://ibouktzmckphsvqabgig.supabase.co/functions/v1/send-tupper-reminder',
    headers := '{"Authorization": "Bearer <ANON_KEY>"}'::jsonb
  );
  $$
);
