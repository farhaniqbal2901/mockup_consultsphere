import React from 'react';
import Hero from './Hero';
import TrustSection from './TrustSection';
import ConsultantsCarousel from './ConsultantsCarousel';
import BenefitsSection from './BenefitsSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialSection from './TestimonialSection';
import './styles.css';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <ConsultantsCarousel />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
