-- Seed: 14 running groups in Stockholm
-- Run in Supabase dashboard → SQL Editor

insert into public.groups
  (namn, ort, omrade, niva, tempo_min, tempo_max, underlag, dagar, tider, oppen_for, typ, storlek, beskrivning, kontakt)
values

-- Nybörjare
(
  'Vasastan Löparklubb',
  'Stockholm', 'Vasastan',
  'nybörjare', 6.5, 8.0, 'asfalt',
  array['måndag', 'onsdag'], '18:30',
  'alla', 'social', 30,
  'Välkomnande grupp för dig som precis börjat springa. Vi kör korta lugna pass runt Vasaparken och ökar sakta distansen tillsammans.',
  'https://www.facebook.com/groups/vasastanloparklubb'
),
(
  'Midsommarkransen Runners',
  'Stockholm', 'Hägersten',
  'nybörjare', 7.0, 8.5, 'asfalt',
  array['måndag'], '18:00',
  'alla', 'social', 35,
  'Perfekt för nybörjare som vill ta sina första löpsteg i ett tryggt och uppmuntrande sällskap. Passet är 30–40 minuter.',
  'https://www.facebook.com/groups/midsommarkransenrunners'
),
(
  'Liljeholmen Löpare',
  'Stockholm', 'Liljeholmen',
  'nybörjare', 7.0, 8.5, 'blandat',
  array['tisdag', 'fredag'], '18:00',
  'alla', 'social', 22,
  'Vi springer längs Årstaviken och anpassar tempot efter gruppen. Ingen lämnas bakom — alla springer klart tillsammans.',
  'https://www.facebook.com/groups/liljeholmenlopare'
),
(
  'Södermalm Nybörjare',
  'Stockholm', 'Södermalm',
  'nybörjare', 6.5, 8.0, 'asfalt',
  array['onsdag'], '18:30',
  'kvinnor', 'social', 20,
  'Grupp för tjejer som vill börja springa i ett tryggt sammanhang. Vi möts vid Medborgarplatsen och springer runt Söder.',
  'https://www.facebook.com/groups/sodermalmnybörjare'
),

-- Motionärer
(
  'Södermalm Runners',
  'Stockholm', 'Södermalm',
  'motionär', 5.5, 6.5, 'asfalt',
  array['tisdag', 'torsdag'], '18:00',
  'alla', 'social', 25,
  'Trevlig löpargrupp som springer runt Södermalm och Hammarby Sjöstad. Fika efter onsdagspassen.',
  'https://www.facebook.com/groups/sodermalmsrunners'
),
(
  'Kungsholmen Kvällslöpare',
  'Stockholm', 'Kungsholmen',
  'motionär', 5.5, 6.5, 'asfalt',
  array['onsdag', 'fredag'], '18:00',
  'alla', 'social', 20,
  'Vi springer runt Kungsholmen — en av Stockholms finaste löparslingor på 10 km med vatten på båda sidor.',
  'https://www.facebook.com/groups/kungsholmenkvallslopare'
),
(
  'Djurgårdslooparna',
  'Stockholm', 'Östermalm',
  'motionär', 5.0, 6.0, 'blandat',
  array['lördag'], '09:00',
  'alla', 'blandat', 40,
  'Lördagslöpning i Djurgården med varierade pass. Ibland tempo, ibland lugn långpass. Alltid bra stämning.',
  'https://www.facebook.com/groups/djurgårdslooparna'
),
(
  'Hammarby Sjöstad Runners',
  'Stockholm', 'Hammarby Sjöstad',
  'motionär', 5.5, 6.5, 'blandat',
  array['onsdag', 'lördag'], '07:00',
  'alla', 'blandat', 28,
  'Tidig morgonlöpning längs Hammarby Sjöstad och Sickla. Perfekt start på dagen innan jobbet.',
  'https://www.facebook.com/groups/hammarbysjostad.runners'
),
(
  'City Runners Stockholm',
  'Stockholm', 'Norrmalm',
  'motionär', 5.0, 6.0, 'asfalt',
  array['måndag', 'onsdag', 'fredag'], '07:00',
  'alla', 'blandat', 50,
  'Stor och aktiv grupp med morgonpass tre dagar i veckan. Samling vid Kungsträdgården. Alla välkomna oavsett nivå inom spannet.',
  'https://www.facebook.com/groups/cityrunnerstockholm'
),
(
  'Bromma Motionärer',
  'Stockholm', 'Bromma',
  'motionär', 5.5, 6.5, 'blandat',
  array['söndag'], '10:00',
  'alla', 'social', 30,
  'Avslappnad söndagslöpning längs Bällstaviken och i Judarskogen. Passar familjelivet — start 10:00 på söndagar.',
  'https://www.facebook.com/groups/brommamotionarer'
),
(
  'Stockholm Women Run',
  'Stockholm', 'Vasastan',
  'motionär', 5.5, 7.0, 'blandat',
  array['tisdag', 'söndag'], '18:00',
  'kvinnor', 'social', 35,
  'Aktiv tjejgrupp med roliga och varierande pass. Vi springer tillsammans, peppar varandra och avslutar ofta med kaffe.',
  'https://www.facebook.com/groups/stockholmwomenrun'
),

-- Avancerade
(
  'Östermalm Speed Club',
  'Stockholm', 'Östermalm',
  'avancerad', 4.0, 5.0, 'asfalt',
  array['tisdag', 'torsdag'], '17:30',
  'alla', 'prestation', 12,
  'Strukturerade intervallpass och tempoträning för löpare som siktar på snabbare tider. Krav: stabil 5 km under 25 min.',
  'https://www.facebook.com/groups/ostermalm.speed.club'
),
(
  'Söder Trail Runners',
  'Stockholm', 'Södermalm',
  'avancerad', 4.5, 5.5, 'trail',
  array['lördag'], '08:00',
  'alla', 'prestation', 18,
  'Teknisk trailträning i Hammarbybacken och Nacka. Vi pressar oss uppför backar och jobbar med löpekonomin i terräng.',
  'https://www.facebook.com/groups/sodertrailrunners'
),
(
  'Stockholm Trail Co.',
  'Stockholm', 'Nacka',
  'avancerad', 4.5, 5.5, 'trail',
  array['onsdag', 'söndag'], '07:00',
  'alla', 'prestation', 15,
  'Seriös trailgrupp med fokus på Nackas stigar. Långa söndagspass 20–30 km, korta tekniska pass på onsdagar.',
  'https://www.facebook.com/groups/stockholmtrailco'
);
