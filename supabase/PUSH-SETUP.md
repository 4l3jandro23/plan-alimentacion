# Activar el aviso push del tupper — pasos manuales

El código ya está escrito y desplegado (app + service worker). Esta parte SÍ la tienes que hacer tú en el panel de Supabase, porque hace falta iniciar sesión con tu cuenta — no es algo que se pueda hacer por código sin tus credenciales.

Proyecto: `ibouktzmckphsvqabgig` → [supabase.com/dashboard](https://supabase.com/dashboard)

## 1. Crear la tabla de suscripciones
**SQL Editor → New query** → pega el contenido de `push-subscriptions.sql` (en esta misma carpeta) → **Run**.

## 2. Desplegar la Edge Function
**Edge Functions → Create a new function** → nombre exacto `send-tupper-reminder` → pega el contenido de `functions/send-tupper-reminder/index.ts` → **Deploy**.

Luego en **Edge Functions → send-tupper-reminder → Secrets** (o Settings → Edge Functions → Secrets del proyecto), añade:
- `VAPID_PRIVATE_KEY` = la clave que te pasé en el chat (también está en `vapid-secret.local.txt`, un archivo que dejé fuera de git — no lo subas nunca).

`SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` ya los inyecta Supabase automáticamente en toda función, no hace falta añadirlos.

## 3. Programar el envío nocturno
**Database → Extensions** → activa `pg_cron` y `pg_net` si no lo están ya.
Luego **SQL Editor → New query** → pega el contenido de `cron.sql` → **Run**.

## Probarlo
1. Instala la app en la pantalla de inicio del iPhone (si no lo está ya).
2. Ábrela, entra en Ajustes → 🔔 Aviso del tupper → **Activar aviso** (pide permiso de notificaciones, acéptalo).
3. Para probar sin esperar a la noche: en el dashboard, **Edge Functions → send-tupper-reminder → Invoke** — si mañana toca tupper, te debería llegar la notificación al momento.

## Si algún día quieres desactivarlo del todo
Basta con eliminar el cron job: `select cron.unschedule('tupper-reminder-nightly');` en el SQL Editor.
