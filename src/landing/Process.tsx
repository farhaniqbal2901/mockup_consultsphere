import React, { ComponentType } from 'react';
import { FaUserPlus, FaPaperPlane, FaMoneyBillWave } from 'react-icons/fa';

interface Step {
  icon: ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: FaUserPlus as ComponentType<{ size?: number }>,
    title: '1. Registrer deg',
    description: 'Bygg en sterk profil på minutter med erfaring, tilgjengelighet og referanser.',
  },
  {
    icon: FaPaperPlane as ComponentType<{ size?: number }>,
    title: '2. Få oppdrag',
    description: 'Vi matcher deg med relevante prosjekter basert på data og faglig vurdering.',
  },
  {
    icon: FaMoneyBillWave as ComponentType<{ size?: number }>,
    title: '3. Lever og få betalt',
    description: 'Lever kvalitetsarbeid, få støtte underveis og mottar honoraret raskt etter godkjenning.',
  },
];

const Process: React.FC = () => {
  return (
    <section className="cs-section cs-process" id="for-consultants">
      <div className="cs-container">
        <div className="cs-section__header">
          <span className="cs-eyebrow">For konsulenter</span>
          <h2>Slik hjelper vi deg å bygge en bærekraftig karriere</h2>
          <p>
            Du får dedikerte rådgivere, forutsigbare honorarer og et faglig fellesskap. Vi håndterer resten slik at du kan fokusere
            på det du er best på.
          </p>
        </div>
        <div className="cs-process__grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="cs-process__card">
                <div className="cs-process__icon">
                  <Icon size={32} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
