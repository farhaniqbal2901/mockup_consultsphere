# ConsultSphere Landing

Ferdig designet landing page for ConsultSphere – en plattform som matcher virksomheter med verifiserte konsulenter innen økonomi, juss, markedsføring, eiendom og teknologi. Prosjektet er bygget med React + TypeScript og leverer en helhetlig, animert forside klar for publisering på GitHub Pages.

## Høydepunkter

- Glassmorphism-navbar med sticky scroll-effekt og responsivt menysystem (`src/landing/Navbar.tsx`).
- Hero med parallaxbakgrunn, partikkelanimasjon, CTA-knapper og dynamiske KPI-chips (`src/landing/Hero.tsx`, `src/landing/Particles.tsx`).
- Tillitsseksjon, konsulentkarusell (Embla + Framer Motion), fordels- og prosessblokker, testimonial og kontaktskjema – alt i én side (`src/landing`).
- Moderne dark-mode design med variabler og helhetlig typografi i `src/App.css` og `src/landing/landing.css`.

## Teknologistack

- React 19 + TypeScript
- Framer Motion for mikroanimasjoner
- Embla Carousel for glidegalleri
- `gh-pages` for deploy til GitHub Pages

## Kom i gang

```bash
npm install
npm start
```

Appen kjører på `http://localhost:3000/mockup_consultsphere` (basert på `homepage`).

## Bygg og deploy

```bash
npm run build    # Produksjonsbygg i build/
npm run deploy   # Publiser til GitHub Pages
```

`npm run deploy` bygger prosjektet og pusher `build/` til `gh-pages`-branchen. Sørg for at `homepage` i `package.json` peker på riktig GitHub Pages-url.

## Prosjektstruktur (utdrag)

```
src/
  App.tsx              # Single-page entry, rendrer landing
  App.css              # Globale variabler og layout
  components/
    StarRating.tsx     # Gjenbrukbar stjernekomponent
  landing/
    LandingPage.tsx    # Komposisjon av seksjoner
    Navbar.tsx         # Navigasjon + mobilskuff
    Hero.tsx           # Hero + CTA + partikler
    TrustLogos.tsx     # Logo-bånd
    ConsultantCarousel.tsx
    Benefits.tsx
    Process.tsx
    Testimonial.tsx
    ContactSection.tsx
    Footer.tsx
    landing.css        # Stiler for hele landing
```

## Videre arbeid

- Koble kontaktskjema til backend/løsning for innsending
- Integrere reelle konsulentdata i stedet for statiske dummy-profiler
- Utvide med flere undersider (Om oss, Tjenester, osv.) dersom behov
