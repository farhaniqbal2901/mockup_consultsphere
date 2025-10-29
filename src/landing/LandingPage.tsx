import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TrustLogos from './TrustLogos';
import ConsultantCarousel from './ConsultantCarousel';
import Benefits from './Benefits';
import Process from './Process';
import Testimonial from './Testimonial';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './landing.css';

const LandingPage: React.FC = () => {
  return (
    <div className="cs-app">
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <ConsultantCarousel />
        <Benefits />
        <Process />
        <Testimonial />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
