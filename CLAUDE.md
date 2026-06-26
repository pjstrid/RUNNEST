@AGENTS.md

# RUNNEST — CLAUDE.md

Projektminne för Claude Code. Läses varje session. Håll den uppdaterad och kortfattad.

## Vad det här är

RUNNEST är en hub för amatörlöpare på sikt, men MVP:n gör EN sak: hjälper en löpare att hitta löpargrupper, och en grupp att göra sig hittbar. Allt annat är backlog.

## MVP-scope (det enda som byggs nu)

Kärnloop: en löpare hittar en grupp som passar — en grupp gör sig hittbar.

**Fyra skärmar:**

1. Sök/lista — sökruta + filter + resultatlista.
2. Gruppdetalj — all info om en grupp + "kontakta/gå med"-knapp.
3. Skapa/redigera grupp — formuläret.
4. Startsida — kort pitch + knapp in till sök.

**Datamodell — en grupp (`groups`-tabell i Supabase):**

- `id`
- `namn`
- `ort` / `omrade` (stad + ev. stadsdel)
- `niva` (nybörjare / motionär / avancerad)
- `tempo` (min/km-spann)
- `underlag` (asfalt / trail / blandat)
- `dagar` + `tider`
- `oppen_for` (alla / kvinnor / män)
- `typ` (social / prestation / blandat)
- `storlek` (ungefärlig)
- `beskrivning` (fritext)
- `kontakt` (länk till Facebook-grupp / WhatsApp / e-post)

**Filter:** ort, nivå/tempo, underlag, dag.

**Beslut som styr MVP:n:**

- Ingen inloggning för att browsa — sök och gruppdetalj är öppna/publika (lägre tröskel, bättre för SEO).
- Inloggning läggs till senare, först när någon behöver äga data (t.ex. en grupp som redigerar sin egen profil). Då: enkel magisk-länk-inloggning via Supabase.
- 10–20 grupper seedas manuellt i EN stad först, så appen känns levande för de första testarna. Självregistrering kommer direkt efter.
- "Gå med" = en länk ut (Facebook/WhatsApp/e-post). MVP bygger INGEN egen chatt eller medlemshantering.

**Uttalat UTANFÖR MVP (backlog — bygg INTE nu):** inloggning/BankID, betalning, Strava-koppling, träningsdagbok, AI-coach, forum, loppkalender, poäng/utmaningar, push-notiser, familjekonto, in-app-chatt.

Om en idé inte ryms i gruppsök-scopet: lägg den i backloggen, bygg den inte nu. Använd `feature-spec`-skillen för att speca nya funktioner innan kod skrivs.

## Teknikstack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- PWA (manifest + service worker via `@ducanh2912/next-pwa`)
- Supabase (Postgres; auth läggs till senare)
- Hosting: Vercel (auto-deploy vid push)

Val av Next.js är medvetet: serverrenderade, indexerbara sidor är viktigt för SEO-driven upptäckt av grupper (t.ex. "löpargrupp Göteborg").

## Mappstruktur

```
src/
  app/           # App Router — sidor och layouts
  components/    # Delade UI-komponenter
  lib/           # Hjälpfunktioner, Supabase-klient
public/
  manifest.json  # PWA-manifest
  icons/         # App-ikoner (192x192, 512x512)
.claude/
  skills/        # git-workflow, runnest-brand, feature-spec
```

## Kommandon

```bash
npm run dev      # Startar dev-server (webpack)
npm run build    # Produktionsbygg (webpack)
npm run lint     # ESLint
```

## Arbetssätt

- Jobba issue-drivet: ett issue = en branch = en PR.
- Pusha ALDRIG direkt till `main`. Allt går via branch + pull request.
- Conventional commits (`feat:`, `fix:`, `chore:` ...).
- Spec före kod för nya funktioner.
- Skills finns i `.claude/skills/`: `git-workflow`, `runnest-brand`, `feature-spec`. Detaljerna lever där — den här filen är översikten.

## Varumärke (kort — se `runnest-brand`-skill för detaljer)

- Primär blå `#08223b`, accent gul `#fbbe01`.
- Quantico för rubriker/logga; ren sans-serif (Inter) för brödtext.
- Svenska som standardspråk i all UI-text. Ton: energisk, inkluderande, aldrig elitistisk.

## Säkerhet

- `.env*` ligger i `.gitignore`. Committa ALDRIG nycklar eller secrets.
- Fyll aldrig i lösenord, tokens eller API-nycklar åt användaren — be hen göra det själv (`gh auth login`, `.env.local`).
