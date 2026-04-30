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

      {/* 2. WHAT’S INCLUDED (INFOGRAPHIC TIMELINE) */}
      <section className="amc-includes">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>What's Included?</h2>
        <div className="scrap-services-shell">
          <div className="scrap-services-path" aria-hidden="true" style={{ height: '672px' }}>
            <svg
              viewBox="0 0 300 700"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="arcGradExhaust" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
                </linearGradient>
                <filter id="nodeGlowExhaust" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Large vertical arc scaled for 6 steps */}
              <path
                d="M 298 20 A 300 330 0 0 0 298 652"
                fill="none"
                stroke="url(#arcGradExhaust)"
                strokeWidth="46"
                strokeLinecap="round"
                opacity="0.45"
              />

              {/* S-curve connecting 6 nodes */}
              <path
                d="M 230 56
                   C 180 80, 140 130, 150 168
                   C 160 206, 200 240, 195 280
                   C 190 320, 140 350, 145 392
                   C 150 434, 190 470, 185 504
                   C 180 538, 140 570, 145 616"
                fill="none"
                stroke="#1e3a5f"
                strokeWidth="2"
                strokeDasharray="5 12"
                opacity="0.4"
              />

              {/* 6 nodes aligned to card centers (56, 168, 280, 392, 504, 616 px) */}
              {[
                [230, 56],
                [150, 168],
                [195, 280],
                [145, 392],
                [185, 504],
                [145, 616],
              ].map(([cx, cy], i) => (
                <g key={i} filter="url(#nodeGlowExhaust)">
                  <circle cx={cx} cy={cy} r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
                  <circle cx={cx} cy={cy} r="6"  fill="#2563eb" />
                </g>
              ))}
            </svg>
          </div>

          <div className="scrap-services-timeline" style={{ gap: '32px', padding: '16px 0' }}>
            {[
              { title: "Regular Cleaning", desc: "Chemical breakdown of carbon deposits across the canopy.", icon: <SparklesIcon /> },
              { title: "Grease & Duct Scrubbing", desc: "Deep interior duct removal of combustible lipid buildup.", icon: <Droplets size={28} /> },
              { title: "Fan & Motor Inspection", desc: "Vibration and bearing checks to prevent fatal mechanical failures.", icon: <Settings size={28} /> },
              { title: "Airflow Performance", desc: "Digital manometry checks ensuring cubic feet per minute target delivery.", icon: <Wind size={28} /> },
              { title: "Filter Replacement", desc: "Baffle and electrostatic precipitator cleaning or replacement.", icon: <Hexagon size={28} /> },
              { title: "Emergency Support", desc: "24/7 priority response for system outages or failed starts.", icon: <Clock size={28} /> }
            ].map((item, idx) => (
              <div className="scrap-offer-card scrap-timeline-step amc-infographic-card scrap-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
                <div className="scrap-offer-meta">
                  <span className="scrap-step-badge">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="scrap-offer-copy">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <div className="offer-icon">{item.icon}</div>
              </div>
            ))}
          </div>
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
