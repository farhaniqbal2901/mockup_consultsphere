# ConsultSphere Platform

En helhetlig mockup av ConsultSphere-plattformen som viser hvordan vi matcher bedrifter og konsulenter. Løsningen er bygget i React (TypeScript) med en mørk, moderne profil og flere landingssider for ulike målgrupper.

## Høydepunkter

- Felles navigasjon/footere via et delt `Layout`-skall og oppdatert global styling (`src/components/Layout.tsx`, `src/App.css`).
- Rik forside med hero, kundelogobånd, karusell for konsulenter, fordelseksjon, prosess og kundereferanser (`src/pages/Home`).
- Dedikerte undersider for «Om oss», Tjenester, Konsulenter, For konsulenter og Kontakt – alle redesignet med det nye `pages.css`-rammeverket.
- Ny kontaktside med validering og informasjonsseksjoner, samt justert datastruktur for ikoner uten eksterne UI-bibliotek.

## Teknologistack

- React 19 + TypeScript
- React Router 7 for ruting
- Framer Motion og Embla Carousel for interaksjon/animasjoner
- `gh-pages` for enkel distribusjon til GitHub Pages

## Kom i gang

```bash
npm install
npm start
```

Applikasjonen kjører på `http://localhost:3000/mockup_consultsphere` (basert på `basename`/`homepage`).

## Bygg og test

```bash
npm run build   # Produksjonsbygg i build/
npm test        # (valgfritt) kjør Jest-testene
```

## Deploy til GitHub Pages

1. Bygg: `npm run build`
2. Distribuer: `npm run deploy`
3. Push endringene: `git add . && git commit -m "Deploy" && git push`

`npm run deploy` bruker `gh-pages` og deployer innholdet i `build/` til `gh-pages`-branchen. Pass på at `homepage`-feltet i `package.json` peker på korrekt GitHub Pages-url.

## Prosjektstruktur (utdrag)

```
src/
  App.tsx            # Ruter + layout
  components/
    Layout.tsx       # Felles topp/bunn
  pages/
    Home/            # Startside med del-seksjoner
    pages.css        # Delt stilark for undersider
    About.tsx        # Om oss-side
    Services.tsx     # Tjenester
    Consultants.tsx  # Konsulentprofiler
    ForConsultants.tsx
    Contact.tsx
```

## Videre arbeid

- Koble kontakt-skjemaet mot reell backend
- Hente inn faktisk data fra API i stedet for mock-data
- Utvide testdekningen for kritiske komponenter
