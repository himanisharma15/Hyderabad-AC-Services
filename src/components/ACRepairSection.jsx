import { motion } from 'framer-motion';
import { 
  Snowflake, Zap, Droplets, Wind, Volume2, 
  ShieldAlert, Cpu, Settings, Wrench, Search, Activity, 
  CheckCircle, ShieldCheck, Clock, Shield, ArrowRight, Phone 
} from 'lucide-react';
import './ACRepairSection.css';

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

export default function ACRepairSection({ onBookNow }) {
  return (
    <div className="repair-page">
      
      {/* 1. HERO SECTION */}
      <section className="repair-hero">
        <motion.div 
          className="repair-hero-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="repair-hero-content" variants={fadeUp}>
            <div className="repair-eyebrow">
              <ShieldCheck size={16} />
              <span>Premium AC Services</span>
            </div>
            <h1 className="repair-hero-heading">
              Expert AC Repair <br /><span>Services in Hyderabad</span>
            </h1>
            <p className="repair-hero-desc">
              Don't let a broken AC ruin your day. Our certified technicians deliver rapid, long-lasting repair services to get your cooling back on track immediately.
            </p>
            
            <div className="repair-hero-actions">
              <button 
                onClick={() => onBookNow('AC Repair Service')}
                className="repair-btn"
              >
                Book Repair Now <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </button>
              <div className="repair-call-link">
                <Phone size={18} />
                <a href="tel:+918712322475">+91 87123 22475</a>
              </div>
            </div>

            <div className="repair-hero-trust">
              <div className="repair-trust-item">
                <CheckCircle size={16} />
                <span>60-Min Response</span>
              </div>
              <div className="repair-trust-item">
                <CheckCircle size={16} />
                <span>Genuine Parts</span>
              </div>
              <div className="repair-trust-item">
                <CheckCircle size={16} />
                <span>Warranty Included</span>
              </div>
            </div>
          </motion.div>




          <motion.div className="repair-graphic-wrapper" variants={fadeUp}>
            <div className="repair-hero-image-wrapper">
              <img src="/images/ac_repair_hero.png" alt="Professional AC Technician" className="repair-hero-image" />
              <div className="repair-image-badge">
                <ShieldCheck size={20} />
                <span>Verified Pros</span>
              </div>
              
              <motion.div 
                className="repair-floating-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="repair-float-icon"><Wrench size={20} /></div>
                <div>
                  <strong>Quick Diagnosis</strong>
                  <p>On-site repair</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. COMMON PROBLEMS */}
      <section className="repair-problems">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="repair-section-heading">Common AC Problems We Fix</h2>
          <p className="repair-section-desc">Identified an issue? Our experts are trained to handle all types of AC glitches.</p>
        </motion.div>
        
        <motion.div 
          className="problems-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { title: "No Cooling", icon: <Snowflake /> },
            { title: "Power Issues", icon: <Zap /> },
            { title: "Water Leakage", icon: <Droplets /> },
            { title: "Gas Leak", icon: <Wind /> },
            { title: "Noise / Vibration", icon: <Volume2 /> },
            { title: "Bad Smell", icon: <ShieldAlert /> },
            { title: "Compressor Issue", icon: <Cpu /> },
            { title: "Thermostat Issue", icon: <Settings /> }
          ].map((problem, idx) => (
            <motion.div className="problem-card" variants={fadeUp} key={idx}>
              <div className="problem-icon">{problem.icon}</div>
              <div className="problem-title">{problem.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="repair-services">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="repair-section-heading">Comprehensive Solutions</h2>
          <p className="repair-section-desc">From minor fixes to major overhauls, we cover everything.</p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { title: "AC Inspection", desc: "Thorough diagnostic check of all indoor and outdoor components to pinpoint exact issues.", icon: <Search size={28} /> },
            { title: "Gas Leak Repair", desc: "Permanent sealing of refrigerant lines and professional recharging to optimal levels.", icon: <Wind size={28} /> },
            { title: "Compressor Repair", desc: "Advanced diagnostics and repair for the heart of your AC, saving you from expensive replacements.", icon: <Cpu size={28} /> },
            { title: "Electrical Repair", desc: "Safe fixing of blown fuses, bad capacitors, and faulty thermostat wiring.", icon: <Shield size={28} /> },
            { title: "Coil Cleaning", desc: "Deep cleaning of evaporator and condenser coils to restore lost cooling performance.", icon: <Droplets size={28} /> },
            { title: "Performance Testing", desc: "Post-repair stress testing to guarantee your AC handles peak summer heat perfectly.", icon: <Activity size={28} /> }
          ].map((service, idx) => (
            <motion.div className="services-card" variants={fadeUp} key={idx}>
              <div className="services-icon-box">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. HOW WE WORK (WORKFLOW) */}
      <section className="repair-workflow">
        <motion.h2 
          className="repair-section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Repair Process
        </motion.h2>
        
        <motion.div 
          className="repair-workflow-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="repair-step-line"></div>
          {[
            { step: "Inspection", icon: <Search size={32} /> },
            { step: "Diagnosis", icon: <Activity size={32} /> },
            { step: "Expert Repair", icon: <Wrench size={32} /> },
            { step: "Final Testing", icon: <CheckCircle size={32} /> },
            { step: "Delivery", icon: <Clock size={32} /> }
          ].map((item, idx) => (
            <motion.div className="repair-step" variants={fadeUp} key={idx}>
              <div className="repair-step-icon">{item.icon}</div>
              <span>{idx + 1}. {item.step}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. WHY CHOOSE US (TRUST CARDS) */}
      <section className="repair-trust">
        <motion.div 
          className="trust-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            "Certified Technicians",
            "Transparent Pricing",
            "No Hidden Charges",
            "Genuine Spare Parts",
            "Multi-Brand Expertise"
          ].map((item, idx) => (
            <motion.div className="trust-card" variants={fadeUp} key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
