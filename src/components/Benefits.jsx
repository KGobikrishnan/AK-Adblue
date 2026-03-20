import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ShieldCheck, Zap, Maximize, Clock } from 'lucide-react';
import './Benefits.css';

const benefitsData = [
  {
    icon: <ShieldCheck size={36} strokeWidth={1.5} />,
    title: "100% Purity Guaranteed",
    desc: "Valvoline certified AdBlue and ultra-refined diesel ensuring maximum engine longevity."
  },
  {
    icon: <Zap size={36} strokeWidth={1.5} />,
    title: "Lightning Dispensing",
    desc: "Commercial high-flow nozzles. Full capacity refueling in a fraction of standard transit times."
  },
  {
    icon: <Maximize size={36} strokeWidth={1.5} />,
    title: "Heavyweight Engineering",
    desc: "Massive turning radii, reinforced concrete lanes, and clearance designed exclusively for multi-axle fleets."
  },
  {
    icon: <Clock size={36} strokeWidth={1.5} />,
    title: "Uninterrupted Operations",
    desc: "Open 24/7/365. Brilliant night lighting and secure facilities when your transport matters most."
  }
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="advantages" className="luxury-benefits section-padding">
      <div className="container">
        
        <div className="luxury-section-header">
          <h2 className="luxury-section-subtitle text-valvoline-red">THE ADVANTAGE</h2>
          <h3 className="luxury-section-title">ENGINEERED FOR <br/>DOMINANCE</h3>
        </div>

        <div className="luxury-benefits-grid" ref={ref}>
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="luxury-benefit-card"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.15}s`
              }}
            >
              <div className="luxury-benefit-icon">
                {benefit.icon}
                <div className="icon-accent-dot"></div>
              </div>
              <h4 className="luxury-benefit-title">{benefit.title}</h4>
              <p className="luxury-benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
