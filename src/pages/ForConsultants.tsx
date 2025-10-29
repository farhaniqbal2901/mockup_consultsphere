import React from 'react';
import { FaUserPlus, FaProjectDiagram, FaMoneyBillWave } from 'react-icons/fa';
import { ComponentType } from 'react';
import './pages.css';

type IconComponent = ComponentType<{ size?: number }>;

interface Step {
  icon: IconComponent;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    icon: FaUserPlus as IconComponent,
    title: '1. Registrer deg',
    text: 'Del erfaring, kompetanseområder og tilgjengelighet. Vi hjelper deg å spisse profilen og prise deg riktig.',
  },
  {
    icon: FaProjectDiagram as IconComponent,
    title: '2. Bli funnet',
    text: 'Matchmotoren vår presenterer deg for relevante oppdrag basert på ekspertise, preferanser og tidligere leveranser.',
  },
  {
    icon: FaMoneyBillWave as IconComponent,
    title: '3. Lever og få betalt',
    text: 'Vi håndterer kontrakter, faktura og oppfølging. Du får utbetalt honorarene dine hver uke minus 1 % plattformavgift.',
  },
];

const perks = [
  {
    title: 'Faste oppdrag i pipeline',
    text: 'Vi jobber proaktivt med kundene våre og bygger langvarige relasjoner. Du får oppdragstilgang som matcher kapasiteten din.',
  },
  {
    title: 'Faglig community',
    text: 'Digitale meetups, partnerfordeler og erfaringsdeling på tvers av fagområder gjør at du kan utvikle deg kontinuerlig.',
  },
  {
    title: 'Forutsigbar økonomi',
    text: 'Vi garanterer utbetaling i tide, har dedikerte rådgivere og tilbyr fleksible modeller for både korte og lengre engasjement.',
  },
];

const ForConsultants: React.FC = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div>
            <span className="page-hero__eyebrow">For konsulenter</span>
            <h1 className="page-hero__title">Bygg en bærekraftig konsulentkarriere</h1>
            <p className="page-hero__subtitle">
              Vi gir deg de rette oppdragene, sørger for flyt i hverdagen og lar deg fokusere på det du er best på: å levere verdi.
            </p>
            <div className="page-hero__stats">
              <div className="stat-pill">
                99 %
                <span>av honoraret beholdes av deg</span>
              </div>
              <div className="stat-pill">
                14 dager
                <span>fra registrering til første oppdrag i snitt</span>
              </div>
            </div>
          </div>
          <div className="card-surface">
            <h3>Dette får du med ConsultSphere</h3>
            <ul className="value-list">
              <li>
                <div className="value-index">01</div>
                <div>
                  <h4>Dedikert rådgiver</h4>
                  <p>Et team følger deg opp og posisjonerer deg mot relevante kunder.</p>
                </div>
              </li>
              <li>
                <div className="value-index">02</div>
                <div>
                  <h4>Fellesskap</h4>
                  <p>Få tilgang til mentorskap, faglige fora og et nettverk av eksperter.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Slik fungerer plattformen</h2>
            <p className="section-subtitle">Tre enkle steg fra registrering til fakturering.</p>
          </div>
          <div className="page-grid page-grid--three">
            {steps.map((step, index) => (
              <div key={step.title} className="card-surface">
                <div className="service-icon">
                  {React.createElement(step.icon, { size: 36 })}
                </div>
                <div className="meta-chip">0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Fordeler for konsulenter</h2>
            <p className="section-subtitle">
              Vi bygger en plattform som styrker deg faglig, kommersielt og operasjonelt.
            </p>
          </div>
          <div className="page-grid page-grid--three">
            {perks.map((perk, index) => (
              <div key={perk.title} className="card-surface">
                <div className="meta-chip">0{index + 1}</div>
                <h3>{perk.title}</h3>
                <p>{perk.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cta-panel">
            <h3>Klar for neste steg?</h3>
            <p>
              Registrer profilen din på få minutter. Vi kontakter deg for en uformell prat om mål og preferanser.
            </p>
            <a className="btn btn-secondary" href="https://app.consultsphere.no/register" target="_blank" rel="noreferrer">
              Registrer deg gratis
            </a>
            <a className="btn btn-outline" href="mailto:hallo@consultsphere.no">
              Snakk med oss først
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForConsultants;
