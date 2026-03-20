import React from 'react';
import { MapPin } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="luxury-location section-padding">
      <div className="container">
        <div className="location-header text-center">
          <h2 className="luxury-section-subtitle text-valvoline-red">FIND US</h2>
          <h3 className="luxury-section-title">HIGHWAY <span className="text-valvoline-blue">HUB</span></h3>
        </div>

        <div className="map-container">
          <a 
            href="https://maps.app.goo.gl/hVoLXpLrPgF7wkQC8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-click-overlay"
            aria-label="Open Google Maps"
          >
            <div className="map-overlay-content">
              <MapPin size={24} className="text-valvoline-red" />
              <span>Get Directions</span>
            </div>
          </a>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125740.09871781297!2d77.10091321451996!3d9.73428384213904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0709b5550a1b63%3A0xc6cb5a3d76b1bba3!2sCumbum%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711204000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
