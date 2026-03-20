import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="luxury-hero">
      
      {/* Background with subtle parallax/opacity */}
      <div className="hero-bg-wrapper">
        <div className="hero-bg-image"></div>
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-luxury-container">
        
        <div className="hero-luxury-content">
          {/* Valvoline Badge */}
          <div className="valvoline-badge">
            <div className="badge-line blue-line"></div>
            <div className="badge-line red-line"></div>
            <span>POWERED BY <strong>VALVOLINE ADBLUE</strong></span>
          </div>
          
          <h1 className="hero-luxury-title">
            PERFORMANCE <br/>
            <span className="text-valvoline-red text-italic">UNLEASHED.</span>
          </h1>
          
          <p className="hero-luxury-desc">
            Cumbum's most advanced commercial filling station. Unmatched purity, lightning-fast high flow pumps, and 24/7 dedicated service for heavy transporters.
          </p>
          
          <div className="hero-luxury-actions">
            <a href="#about" className="btn-luxury">
              Discover Excellence <ChevronRight size={20} style={{ marginLeft: '10px' }} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
