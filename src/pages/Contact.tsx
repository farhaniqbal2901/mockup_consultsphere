import React, { useState } from 'react';
import './pages.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) {
      newErrors.name = 'Vennligst fyll inn navnet ditt.';
    }
    if (!formState.email.trim()) {
      newErrors.email = 'Vennligst oppgi en gyldig e-postadresse.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'E-postformatet ser ikke riktig ut.';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Skriv en kort beskrivelse av hva vi kan hjelpe deg med.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState(initialState);
    }, 1500);
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div>
            <span className="page-hero__eyebrow">Kontakt oss</span>
            <h1 className="page-hero__title">Vi tar gjerne en prat</h1>
            <p className="page-hero__subtitle">
              Fortell oss om behovene dine, så matcher vi deg med riktig rådgiver. Du hører fra oss innen én virkedag.
            </p>
            <div className="page-hero__stats">
              <div className="stat-pill">
                &lt; 24 timer
                <span>til første respons</span>
              </div>
              <div className="stat-pill">
                4.9/5
                <span>score på leveranser</span>
              </div>
            </div>
          </div>
          <div className="card-surface contact-info">
            <div>
              <h3>Snakk direkte med oss</h3>
              <p>
                Send oss en e-post eller ring oss, så setter vi opp en samtale og finner riktig konsulentteam for deg.
              </p>
            </div>
            <a href="mailto:hallo@consultsphere.no">hallo@consultsphere.no</a>
            <a href="tel:+4740000000">+47 40 00 00 00</a>
            <div className="tag-list">
              <span className="tag-chip">Mandag–fredag 08:30–16:00</span>
              <span className="tag-chip">Fysisk eller digitalt møte</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container contact-layout">
          <div className="contact-card">
            <h2 className="section-title" style={{ marginBottom: '1rem', fontSize: '32px' }}>Send oss en melding</h2>
            {isSubmitted && (
              <div className="meta-chip" role="status">Takk! Vi tar kontakt med deg så snart som mulig.</div>
            )}
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name">Navn</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Ditt navn"
                  disabled={isSubmitting}
                />
                {errors.name && <small style={{ color: 'var(--cs-orange)' }}>{errors.name}</small>}
              </div>
              <div>
                <label htmlFor="email">E-post</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="din@bedrift.no"
                  disabled={isSubmitting}
                />
                {errors.email && <small style={{ color: 'var(--cs-orange)' }}>{errors.email}</small>}
              </div>
              <div>
                <label htmlFor="message">Hvordan kan vi hjelpe?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Beskriv kort prosjektet eller utfordringen din"
                  disabled={isSubmitting}
                />
                {errors.message && <small style={{ color: 'var(--cs-orange)' }}>{errors.message}</small>}
              </div>
              <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sender…' : 'Send melding'}
              </button>
            </form>
          </div>
          <div className="contact-info" style={{ gap: '1.5rem' }}>
            <div className="card-surface">
              <h3>Kontor Adresse</h3>
              <p>Universitetet i Agder, Universitetsveien 25, 4630 Kristiansand</p>
              <div className="tag-list">
                <span className="tag-chip">Møterom & coworking</span>
                <span className="tag-chip">Drop-in torsdager</span>
              </div>
            </div>
            <div className="map-wrapper">
              <iframe
                title="ConsultSphere kontor"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2109.830301013343!2d7.99864961597815!3d58.1467390812914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4638023b1b3e3b3b%3A0x4f7c2c3e4b3e3b3b!2sUniversitetet%20i%20Agder!5e0!3m2!1sno!2sno!4v1678886434567!5m2!1sno!2sno"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
