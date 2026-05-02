import React, { useEffect } from 'react';
import { Settings, ShieldCheck, Wind, CheckCircle, Clock, Activity, Building, Droplets, Zap, ChevronRight, AlertTriangle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import '../../components/ExhaustAMCSection.css';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function BasementExhaust({ onBookNow }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookNow = (service = 'Basement Exhaust Consultation') => {
    if (onBookNow) {
      onBookNow(service);
    }
  };

  return (
    <div className="amc-page">
      {/* 1. HERO SECTION */}
      <section className="amc-hero">
        <motion.div 
          className="amc-hero-container amc-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="amc-hero-content">
            <div className="amc-eyebrow">
              <Wind size={18} className="text-primary" />
              <span>Advanced Ventilation</span>
            </div>
            <h1 className="amc-hero-title">
              Efficient <span className="amc-accent">Basement Exhaust</span> Systems
            </h1>
            <p className="amc-hero-desc">
              Eliminate dampness, stale air, and toxic fumes from your underground spaces with our high-performance ventilation engineering.
            </p>
            
            <div className="amc-hero-actions">
              <button onClick={() => handleBookNow('Basement Exhaust')} className="amc-btn">
                Free Site Audit <ChevronRight size={18} style={{ marginLeft: '8px' }} />
              </button>
              <button onClick={() => handleBookNow('Call Expert')} className="amc-btn amc-btn-secondary">Speak to Engineer</button>
            </div>

            <div className="amc-hero-trust">
              <div className="amc-trust-item">
                <CheckCircle size={16} />
                <span>ASHRAE Standard</span>
              </div>
              <div className="amc-trust-item">
                <CheckCircle size={16} />
                <span>Zero Fume Retention</span>
              </div>
              <div className="amc-trust-item">
                <CheckCircle size={16} />
                <span>Low Noise Tech</span>
              </div>
            </div>
          </div>

          <div className="amc-hero-visual">
            <div className="amc-graphic-wrapper">
              <div className="amc-hero-image-wrapper">
                <img 
                  src="/images /Basement Ventilation.jpg" 
                  alt="Basement Exhaust System" 
                  className="amc-hero-image"
                />
                <div className="amc-image-overlay"></div>
              </div>
              
              <motion.div 
                className="amc-floating-card amc-card-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="amc-floating-icon"><Wind size={20} /></div>
                <div>
                  <strong>Fresh Air Flow</strong>
                  <p>1000+ CFM output</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. WHY IT MATTERS */}
      <section className="amc-benefits">
        <div className="amc-container">
          <div className="amc-section-header">
            <span className="amc-subtag">Safety First</span>
            <h2 className="amc-section-title">Why Basement Ventilation Matters?</h2>
            <p className="amc-section-desc">Underground spaces face unique challenges that require specialized air management.</p>
          </div>

          <motion.div 
            className="amc-benefits-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { 
                title: 'CO Prevention', 
                desc: 'Prevent the buildup of lethal Carbon Monoxide from vehicle idling in parking basements.',
                icon: AlertTriangle
              },
              { 
                title: 'Moisture Control', 
                desc: 'Stop mold growth and structural damage by maintaining optimal humidity levels.',
                icon: Droplets
              },
              { 
                title: 'Fire Safety', 
                desc: 'Specialized smoke extraction systems to keep exit routes clear during emergencies.',
                icon: Shield
              },
              { 
                title: 'Odor Elimination', 
                desc: 'Quickly remove stagnant smells and damp odors, making the space usable.',
                icon: Wind
              }
            ].map((benefit, idx) => (
              <motion.div key={idx} className="amc-benefit-card" variants={fadeUpItem}>
                <div className="amc-benefit-icon-wrapper">
                  <benefit.icon size={32} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <div className="amc-benefit-hover-effect"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="amc-cta">
        <div className="amc-container">
          <motion.div 
            className="amc-cta-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="amc-cta-content">
              <h2>Let Your Basement Breathe</h2>
              <p>Get a custom-engineered exhaust solution tailored to your building's footprint.</p>
              <div className="amc-cta-btns">
                <button onClick={() => handleBookNow('Basement Audit')} className="amc-btn amc-btn-inverse">Schedule Site Visit</button>
                <button onClick={() => handleBookNow('Technical Quote')} className="amc-btn amc-btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Technical Quote</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
