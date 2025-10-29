import React, { ComponentType } from 'react';
import { FaRobot, FaUserShield, FaShieldAlt, FaPercent } from 'react-icons/fa';

interface Benefit {
  icon: ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: FaRobot as ComponentType<{ size?: number }>,
    title: 'AI-matching',
    description: 'Finn riktig ekspert på sekunder med en plattform som forstår behov og bransjespesifikke krav.',
  },
  {
    icon: FaUserShield as ComponentType<{ size?: number }>,
    title: 'Verifiserte profiler',
    description: 'Alle konsulenter går gjennom bakgrunnssjekk, referanser og prøveoppdrag før de blir publisert.',
  },
  {
    icon: FaShieldAlt as ComponentType<{ size?: number }>,
    title: 'Trygg betaling',
    description: 'Oppdrag håndteres gjennom sikrede avtaler og escrow. Du betaler først når leveransen er bekreftet.',
  },
  {
    icon: FaPercent as ComponentType<{ size?: number }>,
    title: 'Lav avgift',
    description: 'Kun 1 % plattformavgift – resten går til fagfolkene som skaper verdien.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="cs-section cs-benefits" id="services">
      <div className="cs-container">
        <div className="cs-section__header">
          <span className="cs-eyebrow">Hvorfor ConsultSphere</span>
          <h2>Én plattform. All ekspertisen du trenger.</h2>
          <p>
            ConsultSphere kombinerer teknologi og menneskelig erfaring for å gjøre det enkelt å finne, samarbeide med og beholde
            riktig kompetanse – uansett utfordring.
          </p>
        </div>
        <div className="cs-benefits__grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="cs-benefit-card">
                <div className="cs-benefit-card__icon">
                  <Icon size={34} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
