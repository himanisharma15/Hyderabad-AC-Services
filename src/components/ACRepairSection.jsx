import React, { useEffect, useRef } from 'react';
import './ACRepairSection.css';
import techImage from '../assets/ac-repair-hero.png';
import { ThermometerSnowflake, ZapOff, Droplets, Wind, Volume2, ShieldAlert, Cpu, Settings, Wrench, Search, Activity, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ACRepairSection() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach(el => {
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
            <h1 className="repair-hero-heading">
              AC Repair Services in Hyderabad
            </h1>
            <h2 className="repair-hero-subheading">
              Fast, Reliable & Affordable Repair Solutions
            </h2>
            <p className="repair-hero-desc">
              Don't let a broken AC ruin your day. Our expert technicians deliver rapid, long-lasting repair services to get your cooling back on track immediately.
            </p>
            <button className="repair-btn">Contact Us</button>
          </div>
          <div className="repair-hero-image-wrapper">
            <img src={techImage} alt="Professional AC Technician Repairing Unit" className="repair-hero-image" />
          </div>
        </div>
      </section>

      {/* 2. COMMON PROBLEMS */}
      <section className="repair-problems">
        <h2 className="repair-section-heading repair-fade-up" ref={addToRefs}>Common AC Problems We Fix</h2>
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
        <h2 className="repair-section-heading repair-fade-up" ref={addToRefs}>What We Include</h2>
        <div className="services-grid">
          {[
            { title: "AC Inspection", desc: "Thorough diagnostic check of all indoor and outdoor components to pinpoint exact issues." },
            { title: "Gas Leak Repair", desc: "Permanent sealing of refrigerant lines and professional recharging to optimal levels." },
            { title: "Compressor Repair", desc: "Advanced diagnostics and repair for the heart of your AC, saving you from expensive replacements." },
            { title: "Electrical Repair", desc: "Safe fixing of blown fuses, bad capacitors, and faulty thermostat wiring." },
            { title: "Coil Cleaning", desc: "Deep cleaning of evaporator and condenser coils to restore lost cooling performance." },
            { title: "Performance Testing", desc: "Post-repair stress testing to guarantee your AC handles peak summer heat perfectly." }
          ].map((service, idx) => (
            <div className="services-card repair-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="services-icon-box">
                <ShieldCheck size={28} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW WE WORK (WORKFLOW) */}
      <section className="repair-workflow">
        <h2 className="repair-section-heading repair-fade-up" ref={addToRefs}>How Our Repair Process Works</h2>
        <div className="workflow-container repair-fade-up" ref={addToRefs}>
          <div className="workflow-line"></div>
          {[
            { step: "Inspection", icon: <Search size={32} /> },
            { step: "Diagnosis", icon: <Activity size={32} /> },
            { step: "Repair / Fix", icon: <Wrench size={32} /> },
            { step: "Testing", icon: <Settings size={32} /> },
            { step: "Done", icon: <CheckCircle size={32} /> }
          ].map((item, idx) => (
            <div className="workflow-step" key={idx}>
              <div className="workflow-icon-wrapper">
                {item.icon}
              </div>
              <h4>Step {idx + 1}: {item.step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US (TRUST CARDS) */}
      <section className="repair-trust">
        <div className="trust-grid repair-fade-up" ref={addToRefs}>
          {[
            "Certified Technicians",
            "Fast Response",
            "No Hidden Charges",
            "Genuine Parts",
            "All Brands Supported"
          ].map((item, idx) => (
            <div className="trust-card" key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="repair-cta-banner">
        <div className="repair-fade-up" ref={addToRefs}>
          <h2>Get Your AC Fixed Today</h2>
          <button className="repair-btn repair-btn-inverse">Book Repair Now</button>
        </div>
      </section>

    </div>
  );
}
