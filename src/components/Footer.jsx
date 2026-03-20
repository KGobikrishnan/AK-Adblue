import React from 'react';
import { Droplet, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="corporate-footer">
      <div className="container">
        
        <div className="footer-corporate-grid">
          
          <div className="footer-brand-section">
            <a href="#home" className="footer-logo">
              <Droplet className="text-valvoline-red" size={32} strokeWidth={2.5}/>
              <div className="brand-text">
                <span className="brand-name" style={{color: 'white'}}>AK GROUPS</span>
                <span className="brand-sub">PREMIUM FILLING STATION</span>
              </div>
            </a>
            <p className="footer-corporate-desc">
              The premier destination in Cumbum for ultra-refined AdBlue and Diesel. Engineered specifically for the maximum performance and longevity of heavy commercial fleets.
            </p>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-col-title">CORPORATE</h4>
            <ul className="corporate-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#advantages">Our Advantages</a></li>
              <li><a href="#about">Valvoline Partnership</a></li>
              <li><a href="#reviews">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h4 className="footer-col-title">HEADQUARTERS</h4>
            <ul className="corporate-contact-info">
              <li>
                <MapPin className="text-valvoline-blue" size={20} />
                <span>AK Groups Highway Point,<br/>Cumbum By-pass, Theni,<br/>Tamil Nadu 625516</span>
              </li>
              <li>
                <Phone className="text-valvoline-blue" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail className="text-valvoline-blue" size={20} />
                <span>fuel@akgroups.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-corporate-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} AK Groups Filling Station. All Rights Reserved.</p>
          
          <div className="footer-partners">
            <span>Powered by</span>
            <strong className="text-valvoline-blue">VALVOLINE <span className="text-valvoline-red">ADBLUE</span></strong>
          </div>
          
          <p className="credits">Designed by <strong className="text-valvoline-red">Navi Promotions</strong></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
