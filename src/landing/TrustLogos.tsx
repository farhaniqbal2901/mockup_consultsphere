import React from 'react';

const logos = ['dnb.no', 'obos.no', 'visma.com', 'schibsted.com', 'tine.no'];

const TrustLogos: React.FC = () => {
  return (
    <section className="cs-trust" id="about">
      <div className="cs-container">
        <p className="cs-trust__title">Stolt levert til selskaper som</p>
        <div className="cs-trust__logos">
          {logos.map((logo) => (
            <img key={logo} src={`https://logo.clearbit.com/${logo}`} alt={logo} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
