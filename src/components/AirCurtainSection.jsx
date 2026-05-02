import { motion } from 'framer-motion';
import { Wind, ShieldAlert, Thermometer, Sparkles, Utensils, ShoppingBag, PlusSquare, Briefcase, Snowflake, CheckCircle, Activity, ShieldCheck, Clock, ArrowRight, Phone } from 'lucide-react';
import './AirCurtainSection.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AirCurtainSection({ onBookNow }) {
  return (
    <div className="curtain-page">
      
      {/* 1. HERO SECTION */}
      <section className="curtain-hero">
        <motion.div 
          className="curtain-hero-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="curtain-hero-content" variants={fadeUp}>
            <div className="curtain-eyebrow">
              <ShieldCheck size={16} />
              <span>Advanced Climate Shield</span>
            </div>
            <h1 className="curtain-hero-heading">High-Velocity <br /><span>Air Curtains</span></h1>
            <p className="curtain-hero-desc">
              Stop dust, heat, and insects at your doorstep. Our industrial air curtains create a high-velocity air shield that slashes cooling costs and maintains hygiene.
            </p>
            
            <div className="curtain-hero-actions">
              <button 
                onClick={() => onBookNow('Air Curtain Installation')}
                className="curtain-btn"
              >
                Request Quote <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </button>
              <div className="curtain-call-link">
                <Phone size={18} />
                <a href="tel:+918712322475">+91 87123 22475</a>
              </div>
            </div>

            <div className="curtain-hero-trust">
              <div className="curtain-trust-item">
                <CheckCircle size={16} />
                <span>90% Heat Block</span>
              </div>
              <div className="curtain-trust-item">
                <CheckCircle size={16} />
                <span>Dust & Pest Shield</span>
              </div>
              <div className="curtain-trust-item">
                <CheckCircle size={16} />
                <span>Energy Efficient</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="curtain-graphic-wrapper" variants={fadeUp}>
            <div className="curtain-hero-image-wrapper">
              <img src="/images/air_curtain_hero.png" alt="Air Curtain Installation" className="curtain-hero-image" />
              <div className="curtain-image-badge">
                <Wind size={20} />
                <span>Climate Shield</span>
              </div>
              
              <motion.div 
                className="curtain-floating-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="curtain-float-icon"><Snowflake size={20} /></div>
                <div>
                  <strong>Zero Leakage</strong>
                  <p>Maintains temp</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. BENEFITS */}
      <section className="curtain-benefits">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="curtain-section-title">The Power of Air Shields</h2>
          <p className="curtain-section-desc">Protect your indoor environment without closing the doors to your customers.</p>
        </motion.div>
        <motion.div 
          className="curtain-benefits-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { title: "Dust & Insect Block", desc: "Prevents outside pollutants and flying pests from entering sterile or clean spaces.", icon: <ShieldAlert size={40} /> },
            { title: "Thermal Insulation", desc: "Stops expensive chilled air from escaping, keeping your indoor temperature stable.", icon: <Thermometer size={40} /> },
            { title: "Operational Savings", desc: "Reduces the workload on your AC system, leading to significant monthly power savings.", icon: <Activity size={40} /> },
            { title: "Contamination Control", desc: "Essential for hospitals and food industry to prevent cross-contamination from outside.", icon: <Sparkles size={40} /> }
          ].map((benefit, idx) => (
            <motion.div className="curtain-benefit-card" variants={fadeUp} key={idx}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-text">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. USE CASES */}
      <section className="curtain-usecases">
        <motion.h2 
          className="curtain-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Engineered For
        </motion.h2>
        <motion.div 
          className="usecases-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { label: "Restaurants", icon: <Utensils /> },
            { label: "Retail Shops", icon: <ShoppingBag /> },
            { label: "Cold Storages", icon: <PlusSquare /> },
            { label: "Corporate Offices", icon: <Briefcase /> }
          ].map((item, idx) => (
            <motion.div className="usecase-card" variants={fadeUp} key={idx}>
              <div className="usecase-icon">{item.icon}</div>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="curtain-cta">
        <motion.div 
          className="curtain-cta-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Save Energy & Improve Hygiene Today</h2>
          <p>Get a customized air curtain solution tailored to your entrance size and traffic.</p>
          <button onClick={() => onBookNow('Air Curtain Consultation')} className="curtain-cta-btn">Get a Free Site Visit</button>
        </motion.div>
      </section>

    </div>
  );
}
