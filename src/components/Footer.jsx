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
              <img src="/assets/logo.png" alt="AK Groups Logo" className="footer-logo-img" />
              <div className="brand-text">
                <span className="brand-name" style={{ color: 'white' }}>AK GROUPS</span>
                <span className="brand-sub" style={{ color: '#90959A' }}>PREMIUM ADBLUE STATION</span>
              </div>
            </a>
            <p className="footer-corporate-desc">
              The premier destination in Cumbum for ultra-refined AdBlue. Engineered specifically for the maximum performance and longevity of heavy commercial fleets.
            </p>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-col-title">CORPORATE</h4>
            <ul className="corporate-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#advantages">Our Advantages</a></li>
              <li><a href="#about">Partnership</a></li>
              <li><a href="#reviews">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h4 className="footer-col-title">HEADQUARTERS</h4>
            <ul className="corporate-contact-info">
              <li>
                <MapPin className="text-brand-red" size={20} />
                <span>Indira colony,<br />C.Pudupatti,<br />Cumbum - 625556.<br />Theni (Dt)</span>
              </li>
              <li>
                <Phone className="text-brand-red" size={20} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>+91 93622 25555</span>
                  <span>+91 97881 11666</span>
                </div>
              </li>
              <li>
                <Mail className="text-brand-red" size={20} />
                <span>akcumbum@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-corporate-bottom">
          <p className="copyright">&copy; 2026 AK Groups AdBlue Station. All Rights Reserved.</p>

          <div className="footer-bottom-info">
            <div className="footer-partners">
              <span>Powered by</span>
              <strong className="text-brand-red">Valvoline</strong>
            </div>

            <p className="credits">Designed by <a href="https://www.navipromotions.in/" target="_blank" rel="noopener noreferrer" className="text-brand-red" style={{ textDecoration: 'none' }}><strong>Navi Promotions</strong></a></p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
