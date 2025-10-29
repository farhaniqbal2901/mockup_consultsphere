import React from 'react';
import './pages.css';

const values = [
  {
    title: 'Kvalitet først',
    description:
      'Alle konsulenter gjennomgår en streng kvalitetssikring med bakgrunnssjekk, referanser og testoppdrag før de blir synlige på plattformen.',
  },
  {
    title: 'Radikal åpenhet',
    description:
      'Tydelige profiler, standardiserte vurderinger og transparente priser gjør at både konsulenter og kunder vet hva de kan forvente.',
  },
  {
    title: 'Teknologi med mening',
    description:
      'Vi bruker smart matching og automatisering for å spare tid, men lar mennesker ta de avgjørende beslutningene.',
  },
  {
    title: 'Partnerskap fremfor plattform',
    description:
      'Vi bygger langsiktige relasjoner med konsulenter og virksomheter slik at alle parter lykkes i hver eneste leveranse.',
  },
];

const milestones = [
  {
    year: '2023',
    title: 'Ideen tar form',
    description:
      'Vi oppdaget hvor uoversiktlig markedet for konsulenter var, og startet arbeidet med å samle alt i én sømløs opplevelse.',
  },
  {
    year: '2024',
    title: 'Pilotlansering',
    description:
      'Første versjon av ConsultSphere ble lansert med fokus på økonomi og juss, og fikk raskt de første 100 rådgiverne om bord.',
  },
  {
    year: '2025',
    title: 'Skalerer Norden',
    description:
      'Tjenesten utvides til flere bransjer og vi hjelper bedrifter i hele Norden med å finne spesialistkompetanse.',
  },
];

const About: React.FC = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div>
            <span className="page-hero__eyebrow">Om ConsultSphere</span>
            <h1 className="page-hero__title">Vi gjør kompetanse tilgjengelig for alle</h1>
            <p className="page-hero__subtitle">
              ConsultSphere ble startet for å fjerne friksjonen i markedet for spesialiserte konsulenttjenester. Vi kobler
              sertifiserte eksperter med virksomheter som trenger rask hjelp – uten lange anbudsprosesser og usikker kvalitet.
            </p>
            <div className="page-hero__stats">
              <div className="stat-pill">
                1 200+
                <span>fullførte oppdrag</span>
              </div>
              <div className="stat-pill">
                98 %
                <span>kundetilfredshet</span>
              </div>
              <div className="stat-pill">
                1 %
                <span>plattformavgift</span>
              </div>
            </div>
          </div>
          <div className="card-surface">
            <h3>Vårt oppdrag</h3>
            <p>
              Vi tror at riktig ekspertise kan være forskjellen mellom stagnasjon og vekst. Derfor bygger vi en digital plattform som
              gjør det enkelt å finne, vurdere og engasjere fagpersoner – samtidig som vi gir konsulenter forutsigbare arbeidsvilkår.
            </p>
            <ul className="value-list">
              {values.slice(0, 2).map((value, index) => (
                <li key={value.title}>
                  <div className="value-index">0{index + 1}</div>
                  <div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Verdiene som styrer oss</h2>
            <p className="section-subtitle">
              Vi kombinerer teknologi, menneskelig innsikt og et sterkt community for å levere bedre konsulentopplevelser for begge sider av bordet.
            </p>
          </div>
          <div className="page-grid page-grid--two">
            {values.map((value, index) => (
              <div key={value.title} className="card-surface">
                <div className="meta-chip">0{index + 1}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Reisen vår så langt</h2>
            <p className="section-subtitle">
              Vi bygger gradvis – sammen med konsulentene og kundene våre. Her er noen av milepælene som har formet ConsultSphere.
            </p>
          </div>
          <div className="timeline">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="timeline-item">
                <div className="meta-chip">{milestone.year}</div>
                <h4>{milestone.title}</h4>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cta-panel">
            <h3>Bli med å forme fremtidens kompetansemarked</h3>
            <p>
              Vi samarbeider tett med både etablerte konsulenthus og enkeltstående spesialister. Ta kontakt hvis du vil være med på reisen.
            </p>
            <a className="btn btn-secondary" href="mailto:hallo@consultsphere.no">
              Kontakt teamet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
