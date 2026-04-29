import React, { useEffect, useRef } from 'react';
import { Wind, ShieldAlert, ThermometerSnowflake, Sparkles, Utensils, ShoppingBag, PlusSquare, Briefcase, Snowflake } from 'lucide-react';
import './AirCurtainSection.css';

export default function AirCurtainSection() {
  const elementsRef = useRef([]);

  useEffect(() => {
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
    <div className="curtain-page">
      
      {/* 1. HERO SECTION */}
      <section className="curtain-hero">
        <div className="curtain-hero-container curtain-fade-up" ref={addToRefs}>
          <div className="curtain-hero-content">
            <h1 className="curtain-hero-heading">Air Curtain Installation</h1>
            <h2 className="curtain-hero-subheading">Keep Your Space Cool, Clean & Energy Efficient</h2>
            <p className="curtain-hero-desc">
              Create an invisible barrier against dust, heat, and insects while drastically slashing your cooling expenses with our high-velocity industrial air curtains.
            </p>
            <button className="curtain-btn">Contact Us</button>
          </div>
          
          <div className="curtain-graphic-wrapper">
            <div className="graphic-box">
              <span>AIR CURTAIN UNIT</span>
            </div>
            <div className="airflow-lines">
              <div className="airflow-line"></div>
              <div className="airflow-line"></div>
              <div className="airflow-line"></div>
              <div className="airflow-line"></div>
              <div className="airflow-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS (CARD UI) */}
      <section className="curtain-benefits">
        <h2 className="curtain-section-title curtain-fade-up" ref={addToRefs}>Why Use Air Curtains?</h2>
        <div className="curtain-benefits-grid">
          {[
            { title: "Blocks Dust & Insects", desc: "A constant flow of high-velocity air blocks outside pollutants from entering your sterile spaces.", icon: <ShieldAlert size={32} /> },
            { title: "Maintains Indoor Temperature", desc: "Stops internal chilled air from escaping when doors are open, stabilizing commercial environments.", icon: <ThermometerSnowflake size={32} /> },
            { title: "Improves Energy Efficiency", desc: "Reduces the load on your primary HVAC system, leading to significant monthly electricity savings.", icon: <Wind size={32} /> },
            { title: "Enhances Hygiene", desc: "Critical for hospitals and food-processing centers by preventing cross-contamination from the exterior.", icon: <Sparkles size={32} /> }
          ].map((benefit, idx) => (
            <div className="curtain-benefit-card curtain-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-text">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. USE CASES (OPTIONAL SMALL CARDS) */}
      <section className="curtain-usecases">
        <h2 className="curtain-section-title curtain-fade-up" ref={addToRefs}>Ideal For</h2>
        <div className="usecases-grid">
          {[
            { title: "Restaurants", icon: <Utensils size={32} /> },
            { title: "Showrooms", icon: <ShoppingBag size={32} /> },
            { title: "Hospitals", icon: <PlusSquare size={32} /> },
            { title: "Offices", icon: <Briefcase size={32} /> },
            { title: "Cold Storage", icon: <Snowflake size={32} /> }
          ].map((usecase, idx) => (
            <div className="usecase-card curtain-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="usecase-icon">{usecase.icon}</div>
              <h4>{usecase.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HIGHLIGHT CTA */}
      <section className="curtain-cta">
        <div className="curtain-fade-up" ref={addToRefs}>
          <h2>Block Heat. Stop Dust. Install an Air Curtain Today!</h2>
          <p>Protect your commercial environment and reduce AC running costs securely.</p>
          <button className="curtain-btn">Get Installation</button>
        </div>
      </section>

    </div>
  );
}
