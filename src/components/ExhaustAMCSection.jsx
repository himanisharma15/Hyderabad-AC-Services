import React, { useEffect, useRef } from 'react';
import { Settings, ShieldCheck, Droplets, Fan, Wind, CheckCircle, TrendingUp, Clock, Activity, Utensils, Building, Briefcase, PlusSquare, Hexagon } from 'lucide-react';
import './ExhaustAMCSection.css';

export default function ExhaustAMCSection() {
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
    <div className="amc-page">
      
      {/* 1. HERO SECTION */}
      <section className="amc-hero">
        <div className="amc-hero-container amc-fade-up" ref={addToRefs}>
          <div className="amc-hero-content">
            <h1 className="amc-hero-heading">Exhaust System AMC Services</h1>
            <h2 className="amc-hero-subheading">Annual Maintenance for Commercial & Industrial Exhaust Systems</h2>
            <p className="amc-hero-desc">
              Prevent catastrophic kitchen fires and factory downtimes with scheduled, systematic deep-cleaning and engineering inspections.
            </p>
            <button className="amc-btn">Schedule AMC</button>
          </div>
          
          <div className="amc-graphic-wrapper">
            <div className="exhaust-fan-container">
              <div className="fan-center"></div>
              <div className="exhaust-fan">
                <div className="fan-blade blade-1"></div>
                <div className="fan-blade blade-2"></div>
                <div className="fan-blade blade-3"></div>
                <div className="fan-blade blade-4"></div>
                <div className="fan-blade blade-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT AMC INCLUDES (CARD GRID) */}
      <section className="amc-includes">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>What's Included in Exhaust AMC?</h2>
        <div className="amc-includes-grid">
          {[
            { title: "Regular Cleaning", desc: "Chemical breakdown of carbon deposits across the canopy.", icon: <SparklesIcon /> },
            { title: "Grease & Duct Scrubbing", desc: "Deep interior duct removal of combustible lipid buildup.", icon: <Droplets size={32} /> },
            { title: "Fan & Motor Inspection", desc: "Vibration and bearing checks to prevent fatal mechanical failures.", icon: <Settings size={32} /> },
            { title: "Airflow Performance", desc: "Digital manometry checks ensuring cubic feet per minute target delivery.", icon: <Wind size={32} /> },
            { title: "Filter Replacement", desc: "Baffle and electrostatic precipitator cleaning or replacement.", icon: <Hexagon size={32} /> },
            { title: "Emergency Support", desc: "24/7 priority response for system outages or failed starts.", icon: <Clock size={32} /> }
          ].map((item, idx) => (
            <div className="amc-include-card amc-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="include-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BENEFITS (HIGHLIGHT CARDS) */}
      <section className="amc-benefits">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Why Choose Exhaust AMC?</h2>
        <div className="benefits-highlight-grid amc-fade-up" ref={addToRefs}>
          {[
            "Improves Air Quality",
            "Reduces Fire Risk",
            "Increases System Efficiency",
            "Prevents Costly Breakdowns",
            "Ensures Hygiene Compliance"
          ].map((item, idx) => (
            <div className="benefit-highlight" key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHO NEEDS THIS (SMALL CARDS) */}
      <section className="amc-who">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Who Is It For?</h2>
        <div className="who-needs-grid">
          {[
            { title: "Restaurants", icon: <Utensils size={32} /> },
            { title: "Hotels & Cafes", icon: <Building size={32} /> },
            { title: "Factories", icon: <Settings size={32} /> },
            { title: "Hospitals", icon: <PlusSquare size={32} /> },
            { title: "Food Processing", icon: <Briefcase size={32} /> }
          ].map((who, idx) => (
            <div className="who-needs-card amc-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              {who.icon}
              <h4>{who.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WORKFLOW */}
      <section className="amc-workflow">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Our AMC Process</h2>
        <div className="amc-workflow-wrap amc-fade-up" ref={addToRefs}>
          <div className="amc-step-line"></div>
          {[
            { step: "Site Inspection", icon: <Activity size={32} /> },
            { step: "Plan Selection", icon: <CheckCircle size={32} /> },
            { step: "Scheduled Maintenance", icon: <Clock size={32} /> },
            { step: "Performance Checks", icon: <TrendingUp size={32} /> },
            { step: "Ongoing Support", icon: <ShieldCheck size={32} /> }
          ].map((item, idx) => (
            <div className="amc-step" key={idx}>
              <div className="amc-step-icon">{item.icon}</div>
              <span>{idx + 1}. {item.step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="amc-cta">
        <div className="amc-fade-up" ref={addToRefs}>
          <h2>Keep Your Exhaust System Clean & Efficient All Year</h2>
          <button className="amc-btn amc-btn-inverse">Book AMC Now</button>
        </div>
      </section>

    </div>
  );
}

function SparklesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
