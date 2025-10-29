import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="cs-section cs-contact" id="contact">
      <div className="cs-container cs-contact__layout">
        <div className="cs-contact__intro">
          <span className="cs-eyebrow">Kontakt oss</span>
          <h2>Snakk med oss om prosjektet ditt</h2>
          <p>
            Fortell kort hva du trenger hjelp med, så matcher vi deg med de første kandidatene innen 24 timer. Vi kan møtes digitalt
            eller fysisk i Oslo og Kristiansand.
          </p>
          <div className="cs-contact__cta">
            <a href="mailto:hallo@consultsphere.no" className="cs-button cs-button--primary">
              Send e-post
            </a>
            <a href="tel:+4740000000" className="cs-button cs-button--ghost">
              Ring oss
            </a>
          </div>
          <p className="cs-contact__meta">Mandag – fredag 08:30–16:00</p>
        </div>
        <div className="cs-contact__card">
          <form className="cs-contact__form" aria-label="Kontakt ConsultSphere">
            <label>
              Navn
              <input type="text" name="name" placeholder="Ditt navn" autoComplete="name" />
            </label>
            <label>
              E-post
              <input type="email" name="email" placeholder="din@bedrift.no" autoComplete="email" />
            </label>
            <label>
              Hva trenger du hjelp med?
              <textarea name="message" rows={4} placeholder="Beskriv prosjektet eller utfordringen din" />
            </label>
            <button type="submit" className="cs-button cs-button--secondary">
              Send melding
            </button>
          </form>
          <div className="cs-contact__info">
            <strong>Kontor</strong>
            <span>Universitetet i Agder, Universitetsveien 25</span>
            <span>4630 Kristiansand</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
