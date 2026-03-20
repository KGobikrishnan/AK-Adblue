import React, { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`luxury-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        
        <a href="#home" className="brand-logo">
          <Droplet className="valvoline-blue-icon" size={28} strokeWidth={2.5}/>
          <div className="brand-text">
            <span className="brand-name">AK GROUPS</span>
            <span className="brand-sub">PREMIUM FILLING STATION</span>
          </div>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#advantages">Advantages</a></li>
            <li><a href="#about">Partnership</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </nav>

        <a href="#contact" className="brand-cta">Contact Us</a>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#advantages" onClick={toggleMenu}>Advantages</a></li>
          <li><a href="#about" onClick={toggleMenu}>Partnership</a></li>
          <li><a href="#reviews" onClick={toggleMenu}>Reviews</a></li>
          <li><a href="#contact" className="valvoline-red-text" onClick={toggleMenu}>Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
