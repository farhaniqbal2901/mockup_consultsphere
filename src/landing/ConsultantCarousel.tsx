import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import StarRating from '../components/StarRating';

const consultants = [
  {
    name: 'Elisabeth Hansen',
    role: 'Regnskapsfører',
    rating: 4.9,
    quote: 'Effektiv, presis og løsningsorientert.',
    rate: 'Fra 950 kr/time',
    image: 'https://i.pravatar.cc/150?img=8',
  },
  {
    name: 'Jonas Berg',
    role: 'Forretningsjurist',
    rating: 4.8,
    quote: 'Ryddige kontrakter, rask levering.',
    rate: 'Fra 1 250 kr/time',
    image: 'https://i.pravatar.cc/150?img=9',
  },
  {
    name: 'Sara Nguyen',
    role: 'Digital markedsfører',
    rating: 5.0,
    quote: 'Kreativ, strukturert og resultatorientert.',
    rate: 'Fra 1 100 kr/time',
    image: 'https://i.pravatar.cc/150?img=10',
  },
  {
    name: 'Aksel Lund',
    role: 'IT-arkitekt',
    rating: 4.7,
    quote: 'Skalerbar arkitektur uten skyhøye kostnader.',
    rate: 'Fra 1 280 kr/time',
    image: 'https://i.pravatar.cc/150?img=11',
  },
];

const ConsultantCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000 })]);

  return (
    <section className="cs-section cs-consultants" id="consultants">
      <div className="cs-container">
        <div className="cs-section__header">
          <span className="cs-eyebrow">Konsulenter</span>
          <h2>Utvalgte eksperter klare for nye prosjekter</h2>
          <p>
            Hver profil er kvalitetssikret med bakgrunnssjekk, referanser og prøvesamarbeid. Du får alltid transparente priser
            og tydelige leveranseavtaler.
          </p>
        </div>
        <div className="cs-carousel" ref={emblaRef}>
          <div className="cs-carousel__track">
            {consultants.map((consultant) => (
              <article className="cs-carousel__slide" key={consultant.name}>
                <div className="cs-consultant-card">
                  <img src={consultant.image} alt={consultant.name} loading="lazy" />
                  <h3>{consultant.name}</h3>
                  <p className="cs-consultant-card__role">{consultant.role}</p>
                  <div className="cs-consultant-card__rating">
                    <StarRating rating={consultant.rating} />
                    <span>{consultant.rating.toFixed(1)}</span>
                  </div>
                  <p className="cs-consultant-card__quote">“{consultant.quote}”</p>
                  <p className="cs-consultant-card__rate">{consultant.rate}</p>
                  <a href="#contact" className="cs-button cs-button--ghost">
                    Bestill time
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantCarousel;
