import React, { ComponentType } from 'react';
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

type IconComponent = ComponentType<{ size?: number }>;

const LinkedInIcon = FaLinkedinIn as IconComponent;
const FacebookIcon = FaFacebookF as IconComponent;
const XIcon = FaXTwitter as IconComponent;

const Footer: React.FC = () => {
  return (
    <footer className="cs-footer">
      <div className="cs-container cs-footer__grid">
        <div>
          <h4>ConsultSphere</h4>
          <p>
            Den digitale møteplassen som kobler virksomheter med sertifiserte konsulenter innen økonomi, juss, teknologi og
            markedsføring.
          </p>
        </div>
        <div>
          <h5>Om</h5>
          <a href="#about">Selskapet</a>
          <a href="#services">Hva vi tilbyr</a>
          <a href="#consultants">Konsulenter</a>
        </div>
        <div>
          <h5>For konsulenter</h5>
          <a href="#for-consultants">Hvordan det fungerer</a>
          <a href="mailto:hallo@consultsphere.no">Registrer deg</a>
        </div>
        <div>
          <h5>Juridisk</h5>
          <a href="/vilkar">Vilkår</a>
          <a href="/personvern">Personvern</a>
        </div>
      </div>
      <div className="cs-footer__bottom">
        <span>© {new Date().getFullYear()} ConsultSphere. All rights reserved.</span>
        <div className="cs-footer__social">
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <LinkedInIcon size={18} />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FacebookIcon size={18} />
          </a>
          <a href="https://twitter.com" aria-label="X">
            <XIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
