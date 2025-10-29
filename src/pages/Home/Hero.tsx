import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Particles from './Particles';
import { FaRegBuilding, FaGavel, FaLaptopCode, FaBullhorn } from 'react-icons/fa';
import backgroundImage from '../../assets/bygg.jpg';

const RegBuilding = FaRegBuilding as any;
const Gavel = FaGavel as any;
const LaptopCode = FaLaptopCode as any;
const Bullhorn = FaBullhorn as any;

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  const title = "Finn den rette konsulenten for din bedrift".split(' ');

  return (
    <section className="hero-section">
      <motion.div
        className="hero-background"
        style={{ y, backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="hero-gradient-overlay" />
      <Particles />
      <div className="container hero-content">
        <div className="hero-text-content">
          <h1 className="hero-title">
            {title.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ display: 'inline-block', marginRight: '0.5rem' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <p className="hero-subtitle">
            Plattformen som kobler deg med eksperter innen økonomi, juss, markedsføring og teknologi.
          </p>
          <div className="hero-cta">
            <Link to="/consultants" className="btn btn-primary">Finn konsulent</Link>
            <Link to="/for-consultants" className="btn btn-secondary">Bli konsulent</Link>
          </div>
          <div className="hero-search-mock">
            <span>Søk etter konsulent, f.eks. 'Skatt' eller 'Kontrakt'</span>
          </div>
        </div>
        <div className="hero-icon-chips">
          <IconChip icon={<RegBuilding size={22} />} text="Eiendom" />
          <IconChip icon={<Gavel size={22} />} text="Juss" />
          <IconChip icon={<LaptopCode size={22} />} text="IT" />
          <IconChip icon={<Bullhorn size={22} />} text="Markedsføring" />
        </div>
      </div>
    </section>
  );
};

const IconChip: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <motion.div className="icon-chip" whileHover={{ opacity: 1 }}>
    {icon}
    <span>{text}</span>
  </motion.div>
);

export default Hero;
