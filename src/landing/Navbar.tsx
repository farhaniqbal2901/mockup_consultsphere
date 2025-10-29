import React, { ComponentType, useEffect, useState } from 'react';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';

type IconComponent = ComponentType<{ size?: number }>;

const MenuIcon = HiOutlineMenuAlt4 as IconComponent;
const CloseIcon = HiX as IconComponent;

const NAV_ITEMS = [
  { label: 'Forside', href: '#top' },
  { label: 'Om oss', href: '#about' },
  { label: 'Tjenester', href: '#services' },
  { label: 'Konsulenter', href: '#consultants' },
  { label: 'For konsulenter', href: '#for-consultants' },
  { label: 'Kontakt', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header id="top" className={`cs-navbar ${scrolled ? 'cs-navbar--scrolled' : ''}`}>
      <div className="cs-container cs-navbar__content">
        <a href="#top" className="cs-navbar__brand">
          ConsultSphere<span>.</span>
        </a>
        <nav className="cs-navbar__links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="cs-navbar__link">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#for-consultants" className="cs-button cs-button--secondary cs-navbar__cta">
          Bli konsulent
        </a>
        <button className="cs-navbar__menu" onClick={toggleMenu} aria-label="Åpne meny">
          <MenuIcon size={26} />
        </button>
      </div>

      <div className={`cs-navbar__drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="cs-navbar__drawer-header">
          <span>ConsultSphere</span>
          <button onClick={toggleMenu} aria-label="Lukk meny">
            <CloseIcon size={26} />
          </button>
        </div>
        <div className="cs-navbar__drawer-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={toggleMenu}>
              {item.label}
            </a>
          ))}
          <a href="#for-consultants" className="cs-button cs-button--secondary" onClick={toggleMenu}>
            Bli konsulent
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
