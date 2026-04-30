import { useEffect, useRef } from 'react';
import './ACRepairSection.css';
import { ThermometerSnowflake, ZapOff, Droplets, Wind, Volume2, ShieldAlert, Cpu, Settings, Wrench, Search, Activity, CheckCircle, ShieldCheck, Clock, Shield } from 'lucide-react';

export default function ACRepairSection() {
  const elementsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const elements = elementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="repair-page">
      
      {/* 1. HERO SECTION */}
      <section className="repair-hero">
        <div className="repair-hero-container repair-fade-up" ref={addToRefs}>
          <div className="repair-hero-content">
            <div className="repair-eyebrow">Premium AC Services</div>
            <h1 className="repair-hero-heading">
              Expert AC Repair <br /><span>Services in Hyderabad</span>
            </h1>
            <h2 className="repair-hero-subheading">
              Fast, Reliable & Affordable Repair Solutions
            </h2>
            <p className="repair-hero-desc">
              Don't let a broken AC ruin your day. Our certified technicians deliver rapid, long-lasting repair services to get your cooling back on track immediately.
            </p>
            
            <div className="repair-hero-tags">
              <span>60-Min Response</span>
              <span>Genuine Parts</span>
              <span>Warranty Included</span>
            </div>

            <div className="repair-hero-actions">
              <a href="/contact" className="repair-btn">Book Repair Now</a>
              <p className="repair-hero-note">Available across all Hyderabad locations.</p>
            </div>

            <div className="repair-stats-row">
              {[
                { value: '60 Min', label: 'Average Response' },
                { value: '100%', label: 'Genuine Spare Parts' },
                { value: '90 Days', label: 'Service Warranty' }
              ].map((stat, idx) => (
                <div className="repair-stat-card" key={idx}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="repair-graphic-wrapper">
            <div className="repair-hero-image-wrapper">
              <img src="/images/ac_repair_hero.png" alt="Professional AC Technician" className="repair-hero-image" />
              <div className="repair-image-badge">
                <ShieldCheck size={20} />
                <span>Verified Pros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMMON PROBLEMS */}
      <section className="repair-problems">
        <div className="section-header repair-fade-up" ref={addToRefs}>
          <h2 className="repair-section-heading">Common AC Problems We Fix</h2>
          <p className="repair-section-desc">Identified an issue? Our experts are trained to handle all types of AC glitches.</p>
        </div>
        <div className="problems-grid">
          {[
            { title: "No Cooling", icon: <ThermometerSnowflake /> },
            { title: "Power Issues", icon: <ZapOff /> },
            { title: "Water Leakage", icon: <Droplets /> },
            { title: "Gas Leak", icon: <Wind /> },
            { title: "Noise / Vibration", icon: <Volume2 /> },
            { title: "Bad Smell", icon: <ShieldAlert /> },
            { title: "Compressor Issue", icon: <Cpu /> },
            { title: "Thermostat Issue", icon: <Settings /> }
          ].map((problem, idx) => (
            <div className="problem-card repair-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.05}s` }} key={idx}>
              <div className="problem-icon">{problem.icon}</div>
              <div className="problem-title">{problem.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="repair-services">
        <div className="section-header repair-fade-up" ref={addToRefs}>
          <h2 className="repair-section-heading">Comprehensive Solutions</h2>
          <p className="repair-section-desc">From minor fixes to major overhauls, we cover everything.</p>
        </div>
        <div className="services-grid">
          {[
            { title: "AC Inspection", desc: "Thorough diagnostic check of all indoor and outdoor components to pinpoint exact issues.", icon: <Search size={28} /> },
            { title: "Gas Leak Repair", desc: "Permanent sealing of refrigerant lines and professional recharging to optimal levels.", icon: <Wind size={28} /> },
            { title: "Compressor Repair", desc: "Advanced diagnostics and repair for the heart of your AC, saving you from expensive replacements.", icon: <Cpu size={28} /> },
            { title: "Electrical Repair", desc: "Safe fixing of blown fuses, bad capacitors, and faulty thermostat wiring.", icon: <Shield size={28} /> },
            { title: "Coil Cleaning", desc: "Deep cleaning of evaporator and condenser coils to restore lost cooling performance.", icon: <Droplets size={28} /> },
            { title: "Performance Testing", desc: "Post-repair stress testing to guarantee your AC handles peak summer heat perfectly.", icon: <Activity size={28} /> }
          ].map((service, idx) => (
            <div className="services-card repair-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="services-icon-box">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW WE WORK (WORKFLOW) */}
      <section className="repair-workflow">
        <h2 className="repair-section-heading repair-fade-up" ref={addToRefs}>Our Repair Process</h2>
        <div className="repair-workflow-wrap repair-fade-up" ref={addToRefs}>
          <div className="repair-step-line"></div>
          {[
            { step: "Inspection", icon: <Search size={32} /> },
            { step: "Diagnosis", icon: <Activity size={32} /> },
            { step: "Expert Repair", icon: <Wrench size={32} /> },
            { step: "Final Testing", icon: <CheckCircle size={32} /> },
            { step: "Delivery", icon: <Clock size={32} /> }
          ].map((item, idx) => (
            <div className="repair-step" key={idx}>
              <div className="repair-step-icon">{item.icon}</div>
              <span>{idx + 1}. {item.step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US (TRUST CARDS) */}
      <section className="repair-trust">
        <div className="trust-grid repair-fade-up" ref={addToRefs}>
          {[
            "Certified Technicians",
            "Transparent Pricing",
            "No Hidden Charges",
            "Genuine Spare Parts",
            "Multi-Brand Expertise"
          ].map((item, idx) => (
            <div className="trust-card" key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
