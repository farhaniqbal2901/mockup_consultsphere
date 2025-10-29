import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="cs-section cs-testimonial" id="success">
      <div className="cs-container cs-testimonial__wrapper">
        <div className="cs-testimonial__quote">
          <p className="cs-eyebrow">Kundehistorie</p>
          <blockquote>
            «ConsultSphere hjalp oss å finne riktig team til et kritisk prosjekt på under to døgn. Prosessen var sømløs,
            transparent og profesjonell fra start til slutt.»
          </blockquote>
          <div className="cs-testimonial__author">
            <img src="https://i.pravatar.cc/80?img=14" alt="Thomas fra FinSolve" loading="lazy" />
            <div>
              <strong>Thomas Aarvik</strong>
              <span>Daglig leder, FinSolve AS</span>
            </div>
          </div>
        </div>
        <div className="cs-testimonial__metrics">
          <div>
            <strong>+320%</strong>
            <span>Raskere onboarding av eksperter</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Snittscore på gjennomførte prosjekt</span>
          </div>
          <div>
            <strong>1 %</strong>
            <span>Påslag i plattformavgift</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
