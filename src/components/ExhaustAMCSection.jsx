import React, { useEffect } from 'react';
import { Settings, ShieldCheck, Wind, CheckCircle, Clock, Activity, Building, Droplets, Zap, ChevronRight } from 'lucide-react';
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

export default function ExhaustAMCSection({ onBookNow }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookNow = (service = 'Exhaust AMC Consultation') => {
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
              <ShieldCheck size={18} className="text-primary" />
              <span>Commercial Excellence</span>
            </div>
            <h1 className="amc-hero-title">
              Professional <span className="amc-accent">Exhaust AMC</span> Services in Hyderabad
            </h1>
            <p className="amc-hero-desc">
              Ensure safety, compliance, and peak performance with our structured Annual Maintenance Contracts for kitchen and basement exhaust systems.
            </p>
            
            <div className="amc-hero-actions">
              <button onClick={() => handleBookNow('Exhaust AMC')} className="amc-btn">
                Book AMC Consultation <ChevronRight size={18} style={{ marginLeft: '8px' }} />
              </button>
              <button onClick={() => handleBookNow('Pricing Plans')} className="amc-btn amc-btn-secondary">View Pricing Plans</button>
            </div>

            <div className="amc-hero-trust">
              <div className="amc-trust-item">
                <CheckCircle size={16} />
                <span>Certified Experts</span>
              </div>
              <div className="amc-trust-item">
                <CheckCircle size={16} />
                <span>24/7 Support</span>
              </div>
              <div className="amc-trust-item">
                <CheckCircle size={16} />
                <span>Genuine Spares</span>
              </div>
            </div>
          </div>

          <div className="amc-hero-visual">
            <div className="amc-graphic-wrapper">
              <div className="amc-hero-image-wrapper">
                <img 
                  src="/images /Duct Cleaning.jpg" 
                  alt="Professional Exhaust Maintenance" 
                  className="amc-hero-image"
                />
                <div className="amc-image-overlay"></div>
              </div>
              
              <motion.div 
                className="amc-floating-card amc-card-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="amc-floating-icon"><Clock size={20} /></div>
                <div>
                  <strong>Scheduled Visits</strong>
                  <p>Never miss a service</p>
                </div>
              </motion.div>

              <motion.div 
                className="amc-floating-card amc-card-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="amc-floating-icon"><Zap size={20} /></div>
                <div>
                  <strong>Zero Downtime</strong>
                  <p>Continuous Operation</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="amc-stats">
        <div className="amc-container">
          <motion.div 
            className="amc-stats-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: Building, label: 'Properties Managed', value: '250+' },
              { icon: Activity, label: 'Success Rate', value: '99.9%' },
              { icon: Clock, label: 'Avg. Response Time', value: '4 Hours' },
              { icon: ShieldCheck, label: 'Certified Staff', value: '50+' }
            ].map((stat, idx) => (
              <motion.div key={idx} className="amc-stat-box" variants={fadeUpItem}>
                <div className="amc-stat-icon"><stat.icon size={24} /></div>
                <div className="amc-stat-info">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="amc-benefits">
        <div className="amc-container">
          <div className="amc-section-header">
            <span className="amc-subtag">Service Excellence</span>
            <h2 className="amc-section-title">Why Choose Exhaust AMC?</h2>
            <p className="amc-section-desc">Regular maintenance is not just about repairs; it's about longevity and safety.</p>
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
                title: 'Compliance Ready', 
                desc: 'Stay ahead of safety inspections and fire department regulations with documented service logs.',
                icon: ShieldCheck
              },
              { 
                title: 'Energy Efficiency', 
                desc: 'Clean systems consume up to 30% less power by reducing resistance and improving airflow.',
                icon: Wind
              },
              { 
                title: 'Extended Lifespan', 
                desc: 'Prevent motor burnouts and bearing failures through regular lubrication and cleaning.',
                icon: Clock
              },
              { 
                title: 'Fixed Maintenance Cost', 
                desc: 'Eliminate surprise repair bills with a fixed annual fee that covers routine checks and services.',
                icon: Settings
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

      {/* 4. WORKFLOW SECTION */}
      <section className="amc-workflow">
        <div className="amc-container">
          <div className="amc-workflow-inner">
            <div className="amc-workflow-header">
              <h2 className="amc-section-title text-white">Our Maintenance Process</h2>
              <p className="amc-section-desc text-white-80">A systematic approach to ensuring your systems never fail.</p>
            </div>

            <div className="amc-steps-grid">
              {[
                { step: '01', title: 'Audit', desc: 'Complete system evaluation and health report.' },
                { step: '02', title: 'Plan', desc: 'Customized schedule based on usage intensity.' },
                { step: '03', title: 'Execute', desc: 'Rigorous cleaning and technical calibration.' },
                { step: '04', title: 'Report', desc: 'Detailed maintenance log and optimization tips.' }
              ].map((step, idx) => (
                <div key={idx} className="amc-step-card">
                  <span className="amc-step-num">{step.step}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="amc-cta">
        <div className="amc-container">
          <motion.div 
            className="amc-cta-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="amc-cta-content">
              <h2>Secure Your Systems Today</h2>
              <p>Don't wait for a breakdown. Join our AMC program and experience peace of mind.</p>
              <div className="amc-cta-btns">
                <button onClick={() => handleBookNow('AMC Quote')} className="amc-btn amc-btn-inverse">Request a Quote</button>
                <button onClick={() => handleBookNow('Call Back')} className="amc-btn amc-btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Call Our Expert</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
