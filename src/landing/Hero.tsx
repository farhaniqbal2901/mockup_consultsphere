import React from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';
import heroBackground from '../assets/bygg.jpg';

const Hero: React.FC = () => {
  return (
    <section className="cs-hero" id="home">
      <Particles />
      <div className="cs-hero__background" style={{ backgroundImage: `url(${heroBackground})` }} />
      <div className="cs-hero__overlay" />
      <div className="cs-container cs-hero__content">
        <div className="cs-hero__col">
          <motion.span
            className="cs-hero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Din partner for spesialistkompetanse
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Finn den rette konsulenten for din bedrift
          </motion.h1>
          <motion.p
            className="cs-hero__lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Plattformen som kobler deg med Norges fremste eksperter innen økonomi, juss, markedsføring og teknologi – raskt, trygt og enkelt.
          </motion.p>
          <motion.div
            className="cs-hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="#consultants" className="cs-button cs-button--primary">
              Finn konsulent
            </a>
            <a href="#for-consultants" className="cs-button cs-button--secondary">
              Bli konsulent
            </a>
          </motion.div>
          <motion.div
            className="cs-hero__search"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span>Søk etter kompetanse …</span>
            <div className="cs-hero__search-tags">
              <button type="button">Skatt</button>
              <button type="button">Kontrakt</button>
              <button type="button">Markedsføring</button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="cs-hero__stats"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div>
            <strong>1 200+</strong>
            <span>Oppdrag levert</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>Tilfredse kunder</span>
          </div>
          <div>
            <strong>24 t</strong>
            <span>Til første kandidater</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
