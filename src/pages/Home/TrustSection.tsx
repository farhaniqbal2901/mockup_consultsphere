import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

const logos = ['dnb.no', 'schibsted.com', 'visma.com', 'obos.no', 'tine.no'];

const TrustSection: React.FC = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="trust-logos"
        >
          <h3 className="trust-title">Stolt levert til selskaper som</h3>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`https://logo.clearbit.com/${logo}`}
              alt={logo}
              className="trust-logo"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;