import React, { useEffect, useRef } from 'react';
import './ACGasLeakSection.css';
import technicianImage from '../assets/ac-technician.png';

export default function ACGasLeakSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section className="gasleak-section">
      <div className="gasleak-container" ref={containerRef}>
        
        {/* Left Side: Content */}
        <div className="gasleak-content">
          <h2 className="gasleak-heading">
            Beat the Heat — <span className="gasleak-heading-highlight">Fix AC Gas Leaks Fast</span> With Our Expert Repair Services in Hyderabad!
          </h2>
          <p className="gasleak-description">
            Is your air conditioner not cooling like it used to? You may be facing a refrigerant gas leak — one of the most common yet often overlooked issues affecting AC performance. At Hyderabad AC Services, we specialize in AC Gas Leak Rectification Services designed to restore cooling efficiency and performance.
          </p>

          {/* 2. INFOGRAPHIC TIMELINE */}
          <div className="gasleak-timeline-wrapper py-6">
            <div className="scrap-services-shell w-full">
              <div className="scrap-services-path" aria-hidden="true" style={{ height: '448px' }}>
                <svg
                  viewBox="0 0 300 500"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
                >
                  <defs>
                    <linearGradient id="arcGradGas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Arc for 4 items: height = 16+4*80+3*32+16 = 448px */}
                  <path
                    d="M 298 20 A 240 240 0 0 0 298 428"
                    fill="none"
                    stroke="url(#arcGradGas)"
                    strokeWidth="38"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                  
                  {[60, 172, 284, 396].map((cy, i) => (
                    <g key={i}>
                      <circle cx="210" cy={cy} r="12" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2" />
                      <circle cx="210" cy={cy} r="5"  fill="#0ea5e9" />
                    </g>
                  ))}
                </svg>
              </div>

              <div className="scrap-services-timeline flex flex-col gap-8 py-2">
                {[
                  { title: "Smart Detection", text: "Detect leaks accurately using advanced digital tools", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> },
                  { title: "Expert Seal", text: "Seal and repair leaks permanently with high-grade welding", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
                  { title: "Precision Recharge", text: "Recharge gas to optimal manufacturer-spec levels", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> },
                  { title: "Efficiency Check", text: "Full performance audit to reduce electricity bills", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> }
                ].map((item, idx) => (
                  <div className="scrap-offer-card gasleak-infographic-card" key={idx}>
                    <div className="scrap-offer-meta flex items-center flex-1">
                      <span className="scrap-step-badge">{String(idx + 1).padStart(2, '0')}</span>
                      <div className="scrap-offer-copy ml-4">
                        <h4 className="text-white text-sm font-bold uppercase">{item.title}</h4>
                        <p className="text-white/80 text-xs leading-5">{item.text}</p>
                      </div>
                    </div>
                    <div className="offer-icon w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="gasleak-trust">
            <div className="gasleak-trust-point">
              <svg className="gasleak-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="18" height="18"><polyline points="20 6 9 17 4 12"></polyline></svg>
              All AC Types Covered
            </div>
            <div className="gasleak-trust-point">
              <svg className="gasleak-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="18" height="18"><polyline points="20 6 9 17 4 12"></polyline></svg>
              On-Site Reporting
            </div>
            <div className="gasleak-trust-point">
              <svg className="gasleak-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="18" height="18"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Immediate results
            </div>
          </div>

          <button className="gasleak-cta">
            Contact Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="gasleak-image-wrapper">
          <img 
            src={technicianImage} 
            alt="AC Technician repairing air conditioner gas leak" 
            className="gasleak-image"
          />
        </div>

      </div>
    </section>
  );
}
