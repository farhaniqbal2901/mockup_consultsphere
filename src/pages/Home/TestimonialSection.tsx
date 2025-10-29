import React from 'react';
import './styles.css';

const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Kundene våre sier</h2>
          <p className="section-subtitle">
            Bedrifter over hele landet bruker ConsultSphere for å skalere teamet raskt og trygt.
          </p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-quote">
            <img src="https://i.pravatar.cc/100?img=14" alt="Kunde" className="avatar" />
            <blockquote>
              “Plattformen transformerte måten vi finner og ansetter konsulenter på. Enkelt, effektivt og utrolig verdifullt.”
            </blockquote>
            <cite>— Per Hansen, Daglig leder i Tech-Invest AS</cite>
          </div>
          <div className="kpi-chips">
            <div className="kpi-chip">+1 200<span>bestillinger</span></div>
            <div className="kpi-chip">98 %<span>fornøyde</span></div>
            <div className="kpi-chip">&lt; 24t<span>svar</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
