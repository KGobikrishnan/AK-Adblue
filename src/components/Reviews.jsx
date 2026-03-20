import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
  { id: 1, name: "Velmurugan Transports", text: "Exceptional purity. Since switching to AK's Valvoline AdBlue, our entire DPF alert history has been clean. Outstanding service." },
  { id: 2, name: "KPN Travels", text: "The large turning radius and fast filling nozzles save us crucial minutes on every trip. A true premium experience." },
  { id: 3, name: "Raja Logistics", text: "Best premium diesel in Cumbum. Mileage has noticeably increased across our entire heavyweight fleet. Absolutely incredible." },
  { id: 4, name: "Sri Ram Cargo", text: "Night operations are a breeze. Brilliant lighting, secure location, and perfectly calibrated high-flow pumps." }
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="luxury-reviews section-padding" ref={ref}>
      <div className="container">
        
        <div className="reviews-luxury-header">
          <div>
            <h2 className="luxury-section-subtitle text-valvoline-red">TESTIMONIALS</h2>
            <h3 className="luxury-section-title">THE INDUSTRY <br/>STANDARD</h3>
          </div>
          <p className="reviews-luxury-desc">
            Trusted by the largest commercial, logistics, and passenger transport fleets operating through the Cumbum highway network.
          </p>
        </div>

        <div 
          className="reviews-marquee-container"
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          <div className="reviews-marquee-track">
            {/* Primary Track */}
            <div className="marquee-content">
              {reviewsData.map((review) => (
                <div key={`primary-${review.id}`} className="review-luxury-card">
                  <div className="review-quote-mark text-valvoline-blue">"</div>
                  <p className="review-luxury-text">{review.text}</p>
                  <div className="review-author-block">
                    <div className="author-line"></div>
                    <h4 className="review-luxury-author">{review.name}</h4>
                  </div>
                </div>
              ))}
            </div>
            {/* Cloned Track for Infinite Loop */}
            <div className="marquee-content" aria-hidden="true">
              {reviewsData.map((review) => (
                <div key={`clone-${review.id}`} className="review-luxury-card">
                  <div className="review-quote-mark text-valvoline-blue">"</div>
                  <p className="review-luxury-text">{review.text}</p>
                  <div className="review-author-block">
                    <div className="author-line"></div>
                    <h4 className="review-luxury-author">{review.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
