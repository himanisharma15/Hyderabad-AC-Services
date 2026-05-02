import { motion } from 'framer-motion';
import { 
  ShieldAlert, Thermometer, Zap, Droplets, Volume2, 
  Wind, ShieldCheck, Clock, Settings, Wrench, CheckCircle, 
  Phone, ArrowRight 
} from 'lucide-react';
import './ACInstallationSection.css';

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

export default function ACInstallationSection({ onBookNow }) {
  const warnings = [
    { title: "Frequent Gas Leaks", desc: "Improper flaring and joint tightening lead to refrigerant loss within months.", icon: <Wind /> },
    { title: "Water Dripping", desc: "Poor indoor unit leveling causes water to leak onto your walls and floor.", icon: <Droplets /> },
    { title: "Compressor Failure", desc: "Skipping the vacuuming process traps moisture, causing internal rust and burnout.", icon: <ShieldAlert /> },
    { title: "High Power Bills", desc: "Bad placement reduces airflow, forcing the AC to work twice as hard.", icon: <Zap /> }
  ];

  const services = [
    { title: "Split AC Installation", desc: "Precision mounting of indoor and outdoor units with expert copper piping.", icon: <Settings /> },
    { title: "Window AC Setup", desc: "Sturdy bracket installation and gap sealing for peak cooling retention.", icon: <Wind /> },
    { title: "AC Uninstallation", desc: "Safe removal and gas pump-down to prevent refrigerant loss during relocation.", icon: <Wrench /> },
    { title: "Copper Piping", desc: "Industrial-grade copper line sets with professional insulation for long life.", icon: <ShieldCheck /> },
    { title: "Bracket Fitting", desc: "Heavy-duty outdoor unit brackets with vibration-absorbing pads.", icon: <Clock /> },
    { title: "Gas Top-up", desc: "Ensuring optimal pressure post-installation for day-one cooling efficiency.", icon: <Zap /> }
  ];

  const trustFeatures = [
    { title: "Certified Techs", desc: "Trained professionals for every brand.", icon: "01" },
    { title: "Clean Work", desc: "We leave your space exactly as we found it.", icon: "02" },
    { title: "Right Tools", desc: "Using vacuum pumps and gauges, not guesswork.", icon: "03" },
    { title: "1-Month Warranty", desc: "Full peace of mind on all installation work.", icon: "04" }
  ];

  return (
    <div className="install-page">
      
      {/* 1. HERO SECTION */}
      <section className="install-hero">
        <motion.div 
          className="install-hero-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="install-hero-content" variants={fadeUp}>
            <div className="install-eyebrow">
              <Settings size={16} />
              <span>Precision AC Commissioning</span>
            </div>
            <h1 className="install-hero-heading">
              Professional <br />Installation
            </h1>
            <p className="install-hero-desc">
              A perfect AC starts with a perfect installation. We ensure your unit is leveled, vacuumed, and tested for peak performance from the very first minute.
            </p>
            
            <div className="install-hero-actions">
              <button 
                onClick={() => onBookNow('AC Installation')}
                className="install-btn"
              >
                Book Installation Now <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </button>
              <div className="install-call-link">
                <Phone size={18} />
                <a href="tel:+918712322475">+91 87123 22475</a>
              </div>
            </div>

            <div className="install-hero-trust">
              <div className="install-trust-item">
                <CheckCircle size={16} />
                <span>Certified Techs</span>
              </div>
              <div className="install-trust-item">
                <CheckCircle size={16} />
                <span>Clean Work</span>
              </div>
              <div className="install-trust-item">
                <CheckCircle size={16} />
                <span>1-Month Warranty</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="install-graphic-wrapper" variants={fadeUp}>
            <div className="install-hero-image-wrapper">
              <img src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Professional AC Installation" className="install-hero-image" />
              <div className="install-image-badge">
                <ShieldCheck size={20} />
                <span>Verified Pros</span>
              </div>
              
              <motion.div 
                className="install-floating-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="install-float-icon"><Wind size={20} /></div>
                <div>
                  <strong>Smart Cooling</strong>
                  <p>Day 1 efficiency</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. WHY PROFESSIONAL (WARNINGS) */}
      <section className="install-warnings-section">
        <motion.h2 
          className="install-section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Risks of Poor Installation
        </motion.h2>
        
        <motion.div 
          className="install-warnings-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {warnings.map((item, idx) => (
            <motion.div className="warning-card" variants={fadeUp} key={idx}>
              <div className="warning-icon" style={{ color: 'var(--install-blue)', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 className="warning-title">{item.title}</h3>
              <p className="warning-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="install-services-section">
        <motion.h2 
          className="install-section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Installation Solutions
        </motion.h2>
        
        <motion.div 
          className="install-services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {services.map((item, idx) => (
            <motion.div className="service-card" variants={fadeUp} key={idx}>
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. TRUST SECTION */}
      <section className="install-trust-section">
        <motion.div 
          className="install-trust-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="install-trust-content">
            <span className="install-trust-kicker">Hyderabad's Choice</span>
            <h2>Why Trust Our Experts?</h2>
            <p>
              With over 10 years of experience, we've installed thousands of ACs across Hyderabad, ensuring every customer enjoys uninterrupted cooling and lower maintenance costs.
            </p>
            <button 
              onClick={() => onBookNow('AC Installation Inquiry')}
              className="install-trust-cta"
            >
              Get a Quote
            </button>
          </div>

          <motion.div 
            className="trust-feature-grid"
            variants={stagger}
          >
            {trustFeatures.map((item, idx) => (
              <motion.div className="trust-feature" variants={fadeUp} key={idx}>
                <div className="trust-feature-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
