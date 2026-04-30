import React, { useEffect, useRef } from 'react';
import { Settings, ShieldCheck, Wind, CheckCircle, Clock, Activity, Building, Droplets, Zap, Gauge } from 'lucide-react';
import '../../components/ExhaustAMCSection.css';

export default function BasementExhaust() {
  const elementsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
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
    <div className="amc-page">
      <section className="amc-hero">
        <div className="amc-hero-container amc-fade-up" ref={addToRefs}>
          <div className="amc-hero-content">
            <div className="amc-eyebrow">Basement Exhaust Services</div>
            <h1 className="amc-hero-heading">Safe & Fresh Basement Air</h1>
            <h2 className="amc-hero-subheading">Engineered exhaust systems for residential and commercial basements</h2>
            <p className="amc-hero-desc">
              Remove fumes, control damp air, and keep enclosed basement spaces safer with our industrial-grade ducting and balanced airflow solutions.
            </p>
            <div className="amc-hero-tags">
              <span>Smoke & Fume Extraction</span>
              <span>Moisture Control</span>
              <span>Balanced Ventilation</span>
            </div>
            <div className="amc-hero-actions">
              <a href="/contact" className="amc-btn">Get Consultation</a>
              <p className="amc-hero-note">Ideal for parking areas, residential basements, and commercial spaces.</p>
            </div>
            <div className="amc-stats-row">
              {[
                { value: '100%', label: 'Balanced Airflow' },
                { value: '24/7', label: 'Safety Monitored' },
                { value: 'Zero', label: 'Stagnant Air' }
              ].map((stat, idx) => (
                <div className="amc-stat-card" key={idx}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="amc-graphic-wrapper">
            <div className="amc-hero-image-wrapper">
              <img src="/images /real_basement_hero.png" alt="Basement Exhaust" className="amc-hero-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="amc-includes">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Why Basement Ventilation Matters</h2>
        <div className="amc-includes-grid">
          {[
            { title: "Removes Smoke & Fumes", desc: "Extracts trapped car exhaust and fumes before they spread through the building.", icon: <Zap size={32} /> },
            { title: "Prevents Moisture & Mold", desc: "Controls damp air that can lead to structural damage, odors, and mold growth.", icon: <Droplets size={32} /> },
            { title: "Improves Air Quality", desc: "Continuously refreshes stale air, making enclosed zones safer to breathe in.", icon: <Wind size={32} /> },
            { title: "Enhances Fire Safety", desc: "Crucial for removing thick smoke in case of emergencies in underground levels.", icon: <ShieldCheck size={32} /> },
            { title: "Balanced Circulation", desc: "Ensures uniform airflow across all corners of massive basement spaces.", icon: <Activity size={32} /> },
            { title: "Energy Efficient", desc: "Smart systems that optimize power usage based on carbon monoxide levels.", icon: <Settings size={32} /> }
          ].map((item, idx) => (
            <div className="amc-include-card amc-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="include-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="amc-benefits">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Key Advantages</h2>
        <div className="benefits-highlight-grid amc-fade-up" ref={addToRefs}>
          {[
            "Prevents Toxic Gas Buildup",
            "Eliminates Damp Smells",
            "Protects Building Structure",
            "CO2 & CO Monitoring",
            "Meets Safety Regulations"
          ].map((item, idx) => (
            <div className="benefit-highlight" key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="amc-who">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Ideal For</h2>
        <div className="who-needs-grid who-needs-grid-4">
          {[
            { title: "Residential Buildings", icon: <Building size={32} /> },
            { title: "Parking Basements", icon: <Wind size={32} /> },
            { title: "Commercial Complexes", icon: <Building size={32} /> },
            { title: "Industrial Facilities", icon: <Settings size={32} /> }
          ].map((who, idx) => (
            <div className="who-needs-card amc-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              {who.icon}
              <h4>{who.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="amc-workflow">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Our Ventilation Process</h2>
        <div className="amc-workflow-wrap amc-fade-up" ref={addToRefs}>
          <div className="amc-step-line"></div>
          {[
            { step: "Site Inspection", icon: <Activity size={32} /> },
            { step: "System Design", icon: <Settings size={32} /> },
            { step: "Installation", icon: <Settings size={32} /> },
            { step: "Airflow Testing", icon: <Wind size={32} /> },
            { step: "Maintenance Support", icon: <Clock size={32} /> }
          ].map((item, idx) => (
            <div className="amc-step" key={idx}>
              <div className="amc-step-icon">{item.icon}</div>
              <span>{idx + 1}. {item.step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="amc-cta">
        <div className="amc-fade-up" ref={addToRefs}>
          <h2>Ensure Safe & Fresh Air in Your Basement</h2>
          <a href="/contact" className="amc-btn amc-btn-inverse">Get a Free Quote</a>
        </div>
      </section>

    </div>
  );
}
