-- groups-tabellen för RUNNEST MVP
create table public.groups (
  id          uuid primary key default gen_random_uuid(),
  namn        text not null,
  ort         text not null,
  omrade      text,
  niva        text not null check (niva in ('nybörjare', 'motionär', 'avancerad')),
  tempo_min   numeric(4,1),   -- min/km, t.ex. 5.0
  tempo_max   numeric(4,1),   -- min/km, t.ex. 6.5
  underlag    text not null check (underlag in ('asfalt', 'trail', 'blandat')),
  dagar       text[] not null default '{}',
  tider       text,
  oppen_for   text not null check (oppen_for in ('alla', 'kvinnor', 'män')),
  typ         text not null check (typ in ('social', 'prestation', 'blandat')),
  storlek     integer,
  beskrivning text,
  kontakt     text not null,
  created_at  timestamptz not null default now()
);

-- Publik läsning (inga inloggningskrav för browse-flödet)
alter table public.groups enable row level security;

create policy "Alla kan läsa grupper"
  on public.groups for select
  using (true);
