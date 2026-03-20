import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Building2 } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="luxury-about section-padding">
      <div className="container about-luxury-container" ref={ref}>
        
        <div 
          className="about-luxury-content"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)'
          }}
        >
          <div className="about-luxury-header">
            <Building2 className="text-valvoline-blue" size={32} strokeWidth={1.5} />
            <span className="luxury-section-subtitle">THE PARTNERSHIP</span>
          </div>
          
          <h3 className="luxury-section-title about-title-margin">AK GROUPS & <br/> <span className="text-valvoline-blue">VALVOLINE</span></h3>
          
          <div className="about-text-content">
            <p className="about-lead">
              A relentless pursuit of engine purity and fleet efficiency. We have partnered with Valvoline to bring the absolute gold standard of AdBlue directly to Cumbum.
            </p>
            <p>
              When your commercial vehicles are carrying massive loads across the nation, engine health is not optional. Poor fuel or impure AdBlue causes catalytic breakdowns and catastrophic delays. We eliminate that risk. Our facilities are continuously tested, flawlessly pure, and relentlessly fast.
            </p>
            
            <div className="valvoline-promise">
              <div className="promise-line"></div>
              <p>"Protecting your engine's DPF system with clinical precision."</p>
            </div>
            
            <a href="#contact" className="btn-luxury about-btn">Connect With Us</a>
          </div>
        </div>
        
        <div 
          className="about-luxury-image-wrapper"
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'opacity 1s ease-out 0.3s'
          }}
        >
          <img src="/assets/pump.png" alt="Valvoline AdBlue Pump" className="about-luxury-image" />
          <div className="luxury-image-accent"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
