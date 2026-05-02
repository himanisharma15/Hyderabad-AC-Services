import React, { useEffect } from 'react';
import { Settings, ShieldCheck, Wind, CheckCircle, Clock, Activity, Building, Droplets, Zap, ChevronRight, Flame, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import './ExhaustAMCSection.css';

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

export default function RestaurantCleaningSection({ onBookNow }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookNow = (service = 'Restaurant Exhaust Cleaning') => {
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
              <Flame size={18} className="text-primary" />
              <span>Certified Fire Safety</span>
            </div>
            <h1 className="amc-hero-title">
              Deep <span className="amc-accent">Kitchen Exhaust</span> Cleaning
            </h1>
            <p className="amc-hero-desc">
              Reduce fire risks and improve kitchen air quality with our NFPA-compliant grease removal and hood cleaning services.
            </p>
            
            <div className="amc-hero-actions">
              <button onClick={() => handleBookNow('Kitchen Exhaust')} className="amc-btn">
                Book Cleaning Now <ChevronRight size={18} style={{ marginLeft: '8px' }} />
              </button>
              <button onClick={() => handleBookNow('Compliance Info')} className="amc-btn amc-btn-secondary">Safety Standards</button>
            </div>

            <div className="amc-hero-trust">
              <div className="amc-trust-item">
                <ShieldCheck size={16} />
                <span>Grease-Free Guarantee</span>
              </div>
              <div className="amc-trust-item">
                <CheckCircle size={16} />
                <span>Post-Service Report</span>
              </div>
              <div className="amc-trust-item">
                <CheckCircle size={16} />
                <span>Non-Toxic Agents</span>
              </div>
            </div>
          </div>

          <div className="amc-hero-visual">
            <div className="amc-graphic-wrapper">
              <div className="amc-hero-image-wrapper">
                <img 
                  src="/images /Kitchen Exhaust.jpg" 
                  alt="Restaurant Hood Cleaning" 
                  className="amc-hero-image"
                />
                <div className="amc-image-overlay"></div>
              </div>
              
              <motion.div 
                className="amc-floating-card amc-card-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="amc-floating-icon"><ShieldAlert size={20} /></div>
                <div>
                  <strong>Fire Proof</strong>
                  <p>Grease Level 0</p>
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
            <span className="amc-subtag">Safety & Hygiene</span>
            <h2 className="amc-section-title">Critical Kitchen Hygiene</h2>
            <p className="amc-section-desc">Grease buildup is the #1 cause of restaurant fires. Don't let your business be at risk.</p>
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
                title: 'Fire Suppression', 
                desc: 'Removing flammable grease from ducts reduces the risk of catastrophic kitchen fires.',
                icon: Flame
              },
              { 
                title: 'Better Air Quality', 
                desc: 'Clean hoods draw out smoke and heat more effectively, keeping your chefs cool and productive.',
                icon: Wind
              },
              { 
                title: 'Health Compliance', 
                desc: 'Pass health inspections with flying colors by maintaining a grease-free extraction system.',
                icon: ShieldCheck
              },
              { 
                title: 'Reduced Noise', 
                desc: 'Clean fans operate more quietly and consume less energy by moving air efficiently.',
                icon: Activity
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
              <h2>Keep Your Kitchen Safe</h2>
              <p>Professional deep cleaning for hoods, ducts, and fans. Schedule your cleaning after-hours.</p>
              <div className="amc-cta-btns">
                <button onClick={() => handleBookNow('Kitchen Cleaning')} className="amc-btn amc-btn-inverse">Schedule Cleaning</button>
                <button onClick={() => handleBookNow('Grease Audit')} className="amc-btn amc-btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Request Grease Audit</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
