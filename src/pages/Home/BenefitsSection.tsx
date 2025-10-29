import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUserCheck, FaShieldAlt, FaPercentage } from 'react-icons/fa';
import './styles.css';

const Robot = FaRobot as any;
const UserCheck = FaUserCheck as any;
const ShieldAlt = FaShieldAlt as any;
const Percentage = FaPercentage as any;

const benefits = [
  {
    icon: <Robot size={36} />,
    title: 'AI-matching',
    text: 'Finn riktig ekspert på sekunder.',
  },
  {
    icon: <UserCheck size={36} />,
    title: 'Verifiserte profiler',
    text: 'KYC + kvalitetskontroll.',
  },
  {
    icon: <ShieldAlt size={36} />,
    title: 'Trygg betaling',
    text: 'Escrow og kvittering.',
  },
  {
    icon: <Percentage size={36} />,
    title: 'Lav plattformavgift',
    text: 'Kun 1 % pr. transaksjon.',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Hvorfor velge ConsultSphere?</h2>
          <p className="section-subtitle">
            Vi kombinerer teknologi og menneskelig innsikt for å matche deg med rett kompetanse på rekordtid.
          </p>
        </div>
        <div className="grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
