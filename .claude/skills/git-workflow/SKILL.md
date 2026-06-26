---
name: git-workflow
description: RUNNEST:s git- och GitHub-arbetsflöde. Använd ALLTID denna skill när du ska committa, pusha, skapa en branch, öppna en pull request eller jobba mot ett GitHub-issue – även om användaren inte uttryckligen ber om "git-flödet". Styr branch-namn, commit-format (conventional commits), PR-rutiner via gh, och regeln att aldrig pusha direkt till main.
---

# RUNNEST – git- och GitHub-arbetsflöde

Reglerna för hur kod tar sig in i RUNNEST-repot. Följ dem varje gång.

## Grundregel
- Pusha ALDRIG direkt till `main`. All kod går via en branch + pull request (PR).
- Ett issue = en branch = en PR. Håll varje PR liten och fokuserad.

## Innan du börjar på något nytt
1. Stå på `main` och hämta senaste: `git checkout main && git pull`
2. Skapa en ny branch från main (se namngivning nedan).

## Branch-namngivning
`<typ>/<kort-beskrivning-med-bindestreck>`, t.ex.:
- `feature/grupp-sok`
- `fix/filter-tomt-resultat`
- `chore/uppdatera-deps`

Typer: `feature`, `fix`, `chore`, `docs`, `refactor`, `test`.

## Commits (Conventional Commits)
Format: `<typ>: <kort beskrivning i imperativ>`
- `feat: lägg till filter på underlag`
- `fix: hantera grupp utan angivna tider`
- `chore: bumpa next till senaste`

Regler:
- Små, fokuserade commits – en logisk ändring per commit.
- Beskrivningen får vara på svenska, men håll typ-prefixet på engelska (feat/fix/chore/...).
- Kontrollera `git status` och `git diff` innan commit. Committa aldrig hemlig data (nycklar, `.env*`).

## Pull request
- Öppna PR med GitHub CLI: `gh pr create --fill`, eller med tydlig titel + body.
- Länka issuet i PR-beskrivningen så det stängs vid merge: skriv `Closes #<nr>`.
- PR-titeln följer samma conventional-commit-format som commits.
- Beskriv kort VAD och VARFÖR – inte rad för rad.

## Efter merge
1. `git checkout main && git pull`
2. Ta bort den mergade branchen lokalt: `git branch -d <branch>` (och på GitHub: `git push origin --delete <branch>` om den finns kvar).

## Issues och tavla
- Jobba issue-drivet. När du börjar på ett issue, nämn dess nummer.
- Saknas ett issue för det du gör? Skapa ett först: `gh issue create`.

## Säkerhet (viktigt)
- Fyll ALDRIG i lösenord, tokens eller API-nycklar åt användaren. Be användaren köra `gh auth login` själv och lägga miljövariabler i `.env.local` själv.
- `.env*` ska ligga i `.gitignore`.
