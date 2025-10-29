import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles.css';

const Bars = FaBars as any;
const Times = FaTimes as any;

const NAV_LINKS = [
  { to: '/', label: 'Forside' },
  { to: '/about', label: 'Om oss' },
  { to: '/services', label: 'Tjenester' },
  { to: '/consultants', label: 'Konsulenter' },
  { to: '/for-consultants', label: 'For konsulenter' },
  { to: '/contact', label: 'Kontakt' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <>
      <motion.nav
        className={`navbar fixed-top ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            ConsultSphere<span style={{ color: 'var(--cs-blue)' }}>.</span>
          </Link>
          <div className="navbar-links-desktop">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link to="/for-consultants" className="btn btn-primary navbar-btn-desktop">
            Bli konsulent
          </Link>
          <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(true)}>
            <Bars />
          </div>
        </div>
      </motion.nav>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="mobile-menu"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="mobile-menu-header">
        <div className="mobile-menu-close" onClick={onClose}>
          <Times />
        </div>
      </div>
      <div className="mobile-menu-links">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/for-consultants" className="btn btn-primary" onClick={onClose}>
          Bli konsulent
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
