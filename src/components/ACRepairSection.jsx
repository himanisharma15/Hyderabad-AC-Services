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

      {/* 3. OUR SERVICES (INFOGRAPHIC TIMELINE) */}
      <section className="repair-services">
        <h2 className="repair-section-heading repair-fade-up" ref={addToRefs}>Our Repair Standards</h2>
        <div className="scrap-services-shell max-w-[1100px] mx-auto">
          <div className="scrap-services-path" aria-hidden="true" style={{ height: '672px' }}>
            <svg
              viewBox="0 0 300 700"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="arcGradRepair" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#991b1b" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <filter id="nodeGlowRepair" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              <path
                d="M 298 20 A 300 330 0 0 0 298 652"
                fill="none"
                stroke="url(#arcGradRepair)"
                strokeWidth="46"
                strokeLinecap="round"
                opacity="0.3"
              />

              <path
                d="M 230 56 C 180 80, 140 130, 150 168 C 160 206, 200 240, 195 280 C 190 320, 140 350, 145 392 C 150 434, 190 470, 185 504 C 180 538, 140 570, 145 616"
                fill="none"
                stroke="#475569"
                strokeWidth="2"
                strokeDasharray="5 12"
                opacity="0.4"
              />

              {[
                [230, 56], [150, 168], [195, 280], [145, 392], [185, 504], [145, 616]
              ].map(([cx, cy], i) => (
                <g key={i} filter="url(#nodeGlowRepair)">
                  <circle cx={cx} cy={cy} r="14" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
                  <circle cx={cx} cy={cy} r="6"  fill="#ef4444" />
                </g>
              ))}
            </svg>
          </div>

          <div className="scrap-services-timeline flex flex-col gap-8 py-4">
            {[
              { title: "AC Inspection", desc: "Thorough diagnostic check of all indoor and outdoor components to pinpoint exact issues." },
              { title: "Gas Leak Repair", desc: "Permanent sealing of refrigerant lines and professional recharging to optimal levels." },
              { title: "Compressor Repair", desc: "Advanced diagnostics and repair for the heart of your AC, saving you from expensive replacements." },
              { title: "Electrical Repair", desc: "Safe fixing of blown fuses, bad capacitors, and faulty thermostat wiring." },
              { title: "Coil Cleaning", desc: "Deep cleaning of evaporator and condenser coils to restore lost cooling performance." },
              { title: "Performance Testing", desc: "Post-repair stress testing to guarantee your AC handles peak summer heat perfectly." }
            ].map((service, idx) => (
              <div className="scrap-offer-card scrap-timeline-step repair-infographic-card" key={idx}>
                <div className="scrap-offer-meta flex items-center flex-1">
                  <span className="scrap-step-badge">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="scrap-offer-copy ml-4">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
                <div className="offer-icon w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <ShieldCheck size={28} />
                </div>
              </div>
            ))}
          </div>
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
