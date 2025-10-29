import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './styles.css';

const steps = [
  { number: 1, title: 'Registrer profil', text: 'Fortell oss om din ekspertise og erfaring.' },
  { number: 2, title: 'Få leads', text: 'Motta forespørsler fra relevante kunder.' },
  { number: 3, title: 'Lever & få betalt', text: 'Fullfør oppdraget og motta betaling trygt.' },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Slik fungerer det for konsulenter</h2>
          <p className="section-subtitle">
            Registrer deg, bli synlig og få betalt for det du kan. Tre enkle steg og du er i gang.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,.3)' }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/for-consultants" className="btn btn-secondary">Start som konsulent</Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
