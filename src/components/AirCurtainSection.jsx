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

      {/* 2. BENEFITS (INFOGRAPHIC TIMELINE) */}
      <section className="curtain-benefits">
        <h2 className="curtain-section-title curtain-fade-up" ref={addToRefs}>Why Use Air Curtains?</h2>
        <div className="scrap-services-shell max-w-[1100px] mx-auto">
          <div className="scrap-services-path" aria-hidden="true" style={{ height: '448px' }}>
            <svg
              viewBox="0 0 300 500"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="arcGradCurtain" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              
              <path
                d="M 298 20 A 240 240 0 0 0 298 428"
                fill="none"
                stroke="url(#arcGradCurtain)"
                strokeWidth="38"
                strokeLinecap="round"
                opacity="0.3"
              />
              
              {[60, 172, 284, 396].map((cy, i) => (
                <g key={i}>
                  <circle cx="210" cy={cy} r="12" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx="210" cy={cy} r="5"  fill="#38bdf8" />
                </g>
              ))}
            </svg>
          </div>

          <div className="scrap-services-timeline flex flex-col gap-8 py-2">
            {[
              { title: "Blocks Dust & Insects", desc: "A constant flow of high-velocity air blocks outside pollutants from entering your sterile spaces.", icon: <ShieldAlert size={28} /> },
              { title: "Maintains Indoor Temperature", desc: "Stops internal chilled air from escaping when doors are open, stabilizing commercial environments.", icon: <ThermometerSnowflake size={28} /> },
              { title: "Improves Energy Efficiency", desc: "Reduces the load on your primary HVAC system, leading to significant monthly electricity savings.", icon: <Wind size={28} /> },
              { title: "Enhances Hygiene", desc: "Critical for hospitals and food-processing centers by preventing cross-contamination from the exterior.", icon: <Sparkles size={28} /> }
            ].map((benefit, idx) => (
              <div className="scrap-offer-card curtain-infographic-card" key={idx}>
                <div className="scrap-offer-meta flex items-center flex-1">
                  <span className="scrap-step-badge">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="scrap-offer-copy ml-4">
                    <h3 className="text-white text-sm font-bold uppercase">{benefit.title}</h3>
                    <p className="text-white/80 text-xs leading-5">{benefit.desc}</p>
                  </div>
                </div>
                <div className="offer-icon w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
            ))}
          </div>
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
