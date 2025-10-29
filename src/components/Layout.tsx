import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar';
import Footer from '../pages/Home/Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  return (
    <div className={`app-shell${isHome ? ' app-shell--home' : ''}`}>
      <Navbar />
      <main className={`site-main${isHome ? ' site-main--home' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
