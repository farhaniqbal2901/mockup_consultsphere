import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './styles.css';

const Facebook = FaFacebook as any;
const Twitter = FaTwitter as any;
const Linkedin = FaLinkedin as any;

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Navigasjon</h4>
            <Link to="/about">Om oss</Link>
            <Link to="/services">Tjenester</Link>
            <Link to="/consultants">Konsulenter</Link>
            <Link to="/contact">Kontakt</Link>
          </div>
          <div className="footer-col">
            <h4>Løsninger</h4>
            <Link to="/services">Regnskap & finans</Link>
            <Link to="/services">Juridisk rådgivning</Link>
            <Link to="/services">Markedsføring</Link>
            <Link to="/services">Digital transformasjon</Link>
          </div>
          <div className="footer-col">
            <h4>For konsulenter</h4>
            <Link to="/for-consultants">Hvordan det fungerer</Link>
            <Link to="/for-consultants">Registrer deg</Link>
            <a href="https://app.consultsphere.no/login" target="_blank" rel="noreferrer">
              Logg inn
            </a>
          </div>
          <div className="footer-col">
            <h4>Ressurser</h4>
            <a href="https://blog.consultsphere.no" target="_blank" rel="noreferrer">Blogg</a>
            <a href="https://docs.consultsphere.no" target="_blank" rel="noreferrer">Dokumentasjon</a>
            <a href="https://status.consultsphere.no" target="_blank" rel="noreferrer">Status</a>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <a href="mailto:hallo@consultsphere.no">hallo@consultsphere.no</a>
            <a href="tel:+4740000000">+47 40 00 00 00</a>
            <Link to="/contact">Ofte stilte spørsmål</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ConsultSphere. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><Twitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
