-- Tabla donde se guarda el "buzón" push del dispositivo instalado.
-- Pégalo en Supabase → SQL Editor → New query → Run (paso 1 de PUSH-SETUP.md).
create table if not exists push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  endpoint text unique not null,
  p256dh text not null,
  auth text not null,
  created_at timestamptz default now()
);

alter table push_subscriptions enable row level security;

create policy "anon puede suscribirse"
  on push_subscriptions for insert
  to anon
  with check (true);

create policy "anon puede darse de baja"
  on push_subscriptions for delete
  to anon
  using (true);
