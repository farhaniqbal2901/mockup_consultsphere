import React from 'react';
import StarRating from '../components/StarRating';
import './pages.css';

const consultants = [
  {
    name: 'Ola Nordmann',
    profession: 'Regnskapsfører og CFO-rådgiver',
    rating: 4.9,
    review: '«Ola strukturerte økonomifunksjonen vår på rekordtid og leverte innsikt som gjorde at vi tok bedre beslutninger.»',
    price: 'Fra 890 kr/time',
    specialties: ['Scale-up finans', 'Rapporteringsrutiner', 'Interim CFO'],
    image: 'https://i.pravatar.cc/150?img=21',
  },
  {
    name: 'Kari Normann',
    profession: 'Forretningsjurist',
    rating: 5,
    review: '«Kari hjalp oss med SaaS-kontrakter for Norden. Effektivt, tydelig og med sterk forretningsforståelse.»',
    price: 'Fra 1 250 kr/time',
    specialties: ['Kontrakter', 'Personvern', 'Internasjonal ekspansjon'],
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Sara Nguyen',
    profession: 'Digital markedsfører',
    rating: 4.8,
    review: '«Sara bygget vekstmaskinen vår og tredoblet MQL-er på seks måneder.»',
    price: 'Fra 1 050 kr/time',
    specialties: ['Performance marketing', 'Automation', 'ABM'],
    image: 'https://i.pravatar.cc/150?img=49',
  },
  {
    name: 'Aksel Lund',
    profession: 'IT-arkitekt',
    rating: 4.7,
    review: '«Aksel designet en skyarkitektur som skalerer uten at kostnadene løper løpsk.»',
    price: 'Fra 1 280 kr/time',
    specialties: ['Skyarkitektur', 'DevOps', 'Sikkerhet'],
    image: 'https://i.pravatar.cc/150?img=54',
  },
];

const qualityPillars = [
  {
    title: 'Grundig screening',
    description:
      'Bakgrunnssjekk, referanser og case-baserte intervjuer sikrer at alle konsulenter er faglig sterke og leverer høy kvalitet.',
  },
  {
    title: 'Kontinuerlig vurdering',
    description:
      'Etter hvert oppdrag samler vi inn tilbakemeldinger for å sikre flyt og resultat. 4.5 i snittscore er minimum for å forbli på plattformen.',
  },
  {
    title: 'Fellesskap og læring',
    description:
      'Vi tilbyr faglige meetups, kurspakker og et aktivt community slik at konsulentene våre utvikler seg og deler erfaringer.',
  },
];

const Consultants: React.FC = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div>
            <span className="page-hero__eyebrow">Konsulenter</span>
            <h1 className="page-hero__title">Menneskene bak ConsultSphere</h1>
            <p className="page-hero__subtitle">
              Vi representerer sertifiserte rådgivere som kombinerer sterk fagkunnskap med dokumenterte resultater. Alle profiler er
              tilgjengelige for både korte og lengre oppdrag.
            </p>
            <div className="page-hero__stats">
              <div className="stat-pill">
                400+
                <span>kuraterte profiler</span>
              </div>
              <div className="stat-pill">
                4.8/5
                <span>gjennomsnittlig vurdering</span>
              </div>
            </div>
          </div>
          <div className="card-surface">
            <h3>Hva du får som oppdragsgiver</h3>
            <ul className="value-list">
              <li>
                <div className="value-index">01</div>
                <div>
                  <h4>Egen rådgiver</h4>
                  <p>En dedikert rådgiver følger deg fra behovsavklaring til prosjektleveranse.</p>
                </div>
              </li>
              <li>
                <div className="value-index">02</div>
                <div>
                  <h4>Tilgang til nisjeeksperter</h4>
                  <p>Vi dekker alt fra interim-ledere til spesialister innen teknologi, jus og markedsføring.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Utvalgte eksperter</h2>
            <p className="section-subtitle">Et lite utvalg av profilene vi matcher bedrifter med akkurat nå.</p>
          </div>
          <div className="consultant-cards">
            {consultants.map((consultant) => (
              <div key={consultant.name} className="consultant-card-pro">
                <img src={consultant.image} alt={consultant.name} />
                <h3>{consultant.name}</h3>
                <p className="profession">{consultant.profession}</p>
                <div className="rating" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}>
                  <StarRating rating={consultant.rating} />
                  <span>{consultant.rating.toFixed(1)}</span>
                </div>
                <p className="review">{consultant.review}</p>
                <div className="tag-list">
                  {consultant.specialties.map((specialty) => (
                    <span key={specialty} className="tag-chip">{specialty}</span>
                  ))}
                </div>
                <p className="price">{consultant.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">Hvordan vi kvalitetssikrer</h2>
            <p className="section-subtitle">
              Vi tar ansvar for hele prosessen – fra screening til kontraktsoppfølging – slik at du kan fokusere på resultatene.
            </p>
          </div>
          <div className="page-grid page-grid--three">
            {qualityPillars.map((pillar, index) => (
              <div key={pillar.title} className="card-surface">
                <div className="meta-chip">0{index + 1}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cta-panel">
            <h3>Finn riktig konsulent i dag</h3>
            <p>
              Del prosjektet ditt med oss – vi presenterer de første kandidatene innen 24 timer.
            </p>
            <a className="btn btn-primary" href="mailto:hallo@consultsphere.no">Book en introduksjon</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultants;
