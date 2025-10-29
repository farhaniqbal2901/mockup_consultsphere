import React, { ComponentType } from 'react';
import { FaBalanceScale, FaGavel, FaBullhorn, FaHome, FaLaptopCode, FaUsers } from 'react-icons/fa';
import './pages.css';

type IconComponent = ComponentType<{ size?: number }>;

interface Service {
  icon: IconComponent;
  title: string;
  description: string;
  capabilities: string[];
}

const services: Service[] = [
  {
    icon: FaBalanceScale as IconComponent,
    title: 'Finans og regnskap',
    description: 'Regnskapsførere, økonomisjefer og controllere som kan ta ansvar for alt fra løpende regnskap til komplekse finansielle analyser.',
    capabilities: ['Årsoppgjør', 'Skatt og mva', 'Budsjettering', 'Finansielle modeller'],
  },
  {
    icon: FaGavel as IconComponent,
    title: 'Juridisk rådgivning',
    description: 'Advokater og jurister med bransjeerfaring innen selskapsrett, kontraktsrett, arbeidsrett og compliance.',
    capabilities: ['Kontrakter', 'Compliance', 'Tvisteløsning', 'Personvern/GDPR'],
  },
  {
    icon: FaBullhorn as IconComponent,
    title: 'Markedsføring og kommunikasjon',
    description: 'Strategiske rådgivere og spesialister på vekst, merkevarebygging, innholdsproduksjon og digitale kampanjer.',
    capabilities: ['Go-to-market', 'Performance', 'Employer branding', 'Innhold'],
  },
  {
    icon: FaLaptopCode as IconComponent,
    title: 'Teknologi og produkt',
    description: 'Utviklere, designere og teknologiledere som bygger robuste løsninger, moderniserer infrastruktur og leder innovasjon.',
    capabilities: ['Fullstack-utvikling', 'UX/UI', 'Skyarkitektur', 'Produktledelse'],
  },
  {
    icon: FaHome as IconComponent,
    title: 'Eiendom og prosjekt',
    description: 'Rådgivere innen bygg- og eiendomsprosjekter, fra due diligence og kontrakter til prosjektledelse.',
    capabilities: ['Prosjektledelse', 'Due diligence', 'Bærekraft', 'Offentlige anskaffelser'],
  },
  {
    icon: FaUsers as IconComponent,
    title: 'HR og organisasjon',
    description: 'HR-ledere, organisasjonspsykologer og rekrutteringsspesialister som styrker kultur og skalerer team.',
    capabilities: ['Rekruttering', 'HR-strategi', 'Interim-ledelse', 'Lederutvikling'],
  },
];

const process = [
  {
    title: 'Behovsinnsikt',
    description: 'Vi kartlegger målene, tidslinjen og kravene dine slik at vi kan anbefale riktig profil fra dag én.',
  },
  {
    title: 'Presis matching',
    description: 'Matchmotoren vår kombinerer erfaring, tilgjengelighet og tidligere leveranser for å foreslå de beste kandidatene.',
  },
  {
    title: 'Oppstart og måling',
    description: 'Vi setter klare leveranseplaner, følger opp gjennom hele oppdraget og måler effekt etter levering.',
  },
];

const Services: React.FC = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div>
            <span className="page-hero__eyebrow">Tjenester</span>
            <h1 className="page-hero__title">Eksperter på plass akkurat når du trenger dem</h1>
            <p className="page-hero__subtitle">
              Uansett om du trenger en interim CFO, juridisk spisskompetanse eller et produktteam, hjelper vi deg å finne riktig kombinasjon av folk og ferdigheter.
            </p>
            <div className="page-hero__stats">
              <div className="stat-pill">
                48 timer
                <span>gjennomsnittlig tid til første kandidatliste</span>
              </div>
              <div className="stat-pill">
                3 000+
                <span>verifiserte timer levert månedlig</span>
              </div>
            </div>
          </div>
          <div className="info-banner">
            <div>
              <strong>1 200+</strong>
              Oppdrag levert siden oppstart
            </div>
            <div>
              <strong>4.9/5</strong>
              Gjennomsnittlig tilbakemelding fra oppdragsgivere
            </div>
            <div>
              <strong>&lt; 10 min</strong>
              Før første samtale med dedikert rådgiver
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Våre fagområder</h2>
            <p className="section-subtitle">
              Vi dekker de viktigste funksjonene i moderne virksomheter og bygger dedikerte talentpooler i hvert segment.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="card-surface">
                <div className="service-icon">
                  {React.createElement(service.icon, { size: 36 })}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">
                  {service.capabilities.map((capability) => (
                    <span key={capability} className="tag-chip">{capability}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Slik jobber vi med oppdrag</h2>
            <p className="section-subtitle">
              Fra første samtale til ferdig leveranse – vi er tett på for å sikre at både konsulent og kunde lykkes.
            </p>
          </div>
          <div className="timeline">
            {process.map((step, index) => (
              <div key={step.title} className="timeline-item">
                <div className="meta-chip">0{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cta-panel">
            <h3>Fortell oss hva du trenger</h3>
            <p>Legg igjen noen stikkord om prosjektet, så matcher vi deg med relevante profiler innen ett døgn.</p>
            <a className="btn btn-primary" href="mailto:hallo@consultsphere.no">Start et oppdrag</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
