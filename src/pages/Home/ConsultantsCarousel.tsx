import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import StarRating from '../../components/StarRating';
import './styles.css';

const consultants = [
  {
    name: 'Elisabeth Hansen',
    profession: 'Regnskapsfører',
    rating: 4.9,
    review: 'Effektiv, presis og løsningsorientert.',
    price: '950 kr/time',
    image: 'https://i.pravatar.cc/150?img=8',
  },
  {
    name: 'Jonas Berg',
    profession: 'Forretningsjurist',
    rating: 4.8,
    review: 'Ryddige kontrakter, rask levering.',
    price: '1400 kr/time',
    image: 'https://i.pravatar.cc/150?img=9',
  },
  {
    name: 'Sara Nguyen',
    profession: 'Digital markedsfører',
    rating: 5.0,
    review: 'Skarpe kampanjer med målbar effekt.',
    price: '1100 kr/time',
    image: 'https://i.pravatar.cc/150?img=10',
  },
  // Add more for a total of 6-8
  {
    name: 'Aksel Lund',
    profession: 'IT-arkitekt',
    rating: 4.7,
    review: 'Fantastisk til å se helheten i komplekse systemer.',
    price: '1250 kr/time',
    image: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Ingrid Olsen',
    profession: 'HR-rådgiver',
    rating: 4.9,
    review: 'Mester på konflikthåndtering og organisasjonsutvikling.',
    price: '1050 kr/time',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Per-Kristian Foss',
    profession: 'Revisor',
    rating: 4.8,
    review: 'Nøyaktig og pålitelig, anbefales på det sterkeste.',
    price: '1300 kr/time',
    image: 'https://i.pravatar.cc/150?img=13',
  },
];

const ConsultantsCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <section className="consultants-carousel-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Utvalgte konsulenter</h2>
          <p className="section-subtitle">
            Oppdag eksperter som får toppscore for kvalitet, leveransedyktighet og samarbeidsevne.
          </p>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {consultants.map((consultant, index) => (
              <div className="embla__slide" key={index}>
                <motion.div className="consultant-card" whileHover={{ y: -10, borderColor: 'var(--cs-blue)' }}>
                  <img src={consultant.image} alt={consultant.name} className="consultant-image" />
                  <h3>{consultant.name}</h3>
                  <p className="profession">{consultant.profession}</p>
                  <div className="rating">
                    <StarRating rating={consultant.rating} />
                    <span>{consultant.rating.toFixed(1)}</span>
                  </div>
                  <p className="review">"{consultant.review}"</p>
                  <p className="price">Fra {consultant.price}</p>
                  <button className="btn btn-outline">Bestill time</button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantsCarousel;
