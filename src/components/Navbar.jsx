import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          Kushagra<span className="dot">.</span>
        </a>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
          <a href="#skills" className="nav-link" onClick={handleNavClick}>Skills</a>
          <a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
