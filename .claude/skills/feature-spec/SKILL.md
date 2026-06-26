---
name: feature-spec
description: Mall och process för att speca en funktion i RUNNEST INNAN kod skrivs. Använd denna skill ALLTID när användaren vill bygga en ny funktion, skärm eller ett nytt flöde, eller börjar på ett nytt issue – även om de bara säger "nu bygger vi X". Tvingar fram user story, acceptanskriterier och en tydlig scope-gräns så att funktioner inte växer okontrollerat.
---

# RUNNEST – funktionsspec före kod

Innan du skriver kod för en ny funktion: skriv en kort spec och stäm av den med användaren. Detta håller MVP:n smal och hindrar funktioner från att svälla.

Skapa specen som en kort markdown (i ett issue, eller `docs/specs/<funktion>.md`).

## Mall

**Funktion:** <namn>

**User story:** Som <typ av användare> vill jag <mål> så att <nytta>.

**Acceptanskriterier** (testbara):
- [ ] ...
- [ ] ...

**Ingår (scope):**
- ...

**Ingår INTE (medvetet utanför):**
- ...

**Datapåverkan:** vilka fält/tabeller berörs (t.ex. `groups`-tabellen).

**Skärmar berörda:** vilka av MVP-skärmarna (sök/lista, gruppdetalj, skapa/redigera grupp, startsida) påverkas.

## Regler
- Ryms idén inte i MVP-scopet (gruppsök)? Lägg den under "Ingår INTE" och i backloggen – bygg den inte nu.
- Håll varje spec liten nog att bli en eller ett par PR:ar.
- Stäm av specen med användaren innan implementation.
