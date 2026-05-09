import React, { useRef, useState, useEffect } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import './AboutUs.css';

const images = [
  'https://www.neftgen.com/wp-content/uploads/2023/06/adblue-dolum-istasyonlari.jpg',
  '/assets/1.dng',
  '/assets/2.dng'
];

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
            <span className="luxury-section-subtitle text-brand-red">THE PARTNERSHIP</span>
          </div>
          
          <h2 className="about-title-margin">
            ELITE <span className="text-brand-red">STANDARDS.</span>
          </h2>
          
          <div className="about-text-content">
            <p className="about-lead desktop-only">
              Authorized flagship distributor of high-performance AdBlue solutions.
            </p>
            <p className="desktop-only">
              Our station isn't just a refueling point—it's a high-precision facility engineered for the modern commercial fleet. We bridge the gap between manufacturer excellence and on-road performance.
            </p>
            
            {/* Mobile specific content */}
            <p className="mobile-partnership-text mobile-only">
              Authorized flagship distributor of high-performance AdBlue solutions.
            </p>

            <div className="about-luxury-image-wrapper mobile-only">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Adblue Filling Process"
                  className="about-luxury-image"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="luxury-image-accent"></div>
            </div>

            <p className="mobile-partnership-subtext mobile-only">
              continuously tested, flawlessly pure, and relentlessly fast.
            </p>

            <div className="valvoline-promise desktop-only">
              <p>"Our commitment is simple: ZERO contamination, MAXIMUM uptime."</p>
            </div>

            <a href="#contact" className="btn-luxury about-cta">
              Connect With Us
            </a>
          </div>
        </div>

        <div 
          className="about-luxury-image-wrapper desktop-only"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(40px)',
            transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Adblue Filling Process"
              className="about-luxury-image"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="luxury-image-accent"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
