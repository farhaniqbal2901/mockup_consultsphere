import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Consultants from './pages/Consultants';
import ForConsultants from './pages/ForConsultants';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './components/Layout';
import './App.css';

const App: React.FC = () => {
  return (
    <Router basename="/mockup_consultsphere">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/for-consultants" element={<ForConsultants />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
