---
name: runnest-brand
description: RUNNEST:s varumärkesriktlinjer – färger, typsnitt, ton och UI-principer. Använd denna skill ALLTID när du bygger eller ändrar UI, komponenter, skärmar, landningssidor, ikoner eller någon visuell yta i RUNNEST-appen, även om användaren inte säger "varumärke" eller "design".
---

# RUNNEST – varumärke och UI

Tillämpa det här på all UI som representerar RUNNEST.

## Färger
- Primär (mörk blå): `#08223b`
- Accent (gul): `#fbbe01`
- Sekundär gul (ljusare): `#f5b015`

Använd den mörkblå som bas/bakgrund och gult som accent (knappar, highlights, logga). Gult ska sticka ut, inte dränka. Lägg in färgerna som tema-färger i Tailwind (`theme.extend.colors`), t.ex. `runnest-blue` och `runnest-yellow`, så de används konsekvent.

## Typsnitt
- Rubriker / logga: **Quantico** (geometriskt, sportigt).
- Brödtext: ett rent, lättläst sans-serif (t.ex. Inter eller system-ui). Quantico är för uttrycksfullt för längre textstycken – använd det bara för rubriker och accenter.

## Ton
- Energisk, inkluderande, svensk. Vänder sig till amatörlöpare på alla nivåer – aldrig elitistisk.
- Svenska som standardspråk i all UI-text.

## Logga
- "R i ett näste"-symbolen i gult mot mörkblå bakgrund. Ge den luft – träng inte ihop den.
- Skriv namnet konsekvent som "RUNNEST" (ett ord) genom hela appen.

## UI-principer för MVP
- Enkelt och snabbt: målet är att hitta en löpargrupp på så få steg som möjligt.
- Mobil först (PWA): designa för en smal skärm först, bredda sedan.
- Tydliga filter och en ren resultatlista är viktigare än grafiska finesser i MVP:n.
