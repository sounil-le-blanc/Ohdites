create table if not exists public.sources (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  url text not null,
  type_source text default 'document',
  domaine text,
  statut text default 'en_attente',
  cree_le timestamptz not null default now()
);

alter table public.sources enable row level security;

create policy "sources_insert_public"
  on public.sources for insert
  with check (true);

create policy "sources_select_public"
  on public.sources for select
  using (true);
