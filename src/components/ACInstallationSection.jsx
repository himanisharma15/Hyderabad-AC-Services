import React, { useEffect, useRef } from 'react';
import './ACInstallationSection.css';
import techImage from '../assets/ac-install-tech.png';

export default function ACInstallationSection() {
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
    <div className="install-page">
      
      {/* 1. HERO SECTION */}
      <section className="install-hero">
        <div className="install-hero-container fade-up-element" ref={addToRefs}>
          <div className="install-hero-content">
            <h1 className="install-hero-heading">
              AC Installation Services in Hyderabad
            </h1>
            <h2 className="install-hero-subheading">
              Professional Air Conditioner Installation for Homes & Businesses
            </h2>
            <p className="install-hero-desc">
              At Hyderabad AC Services, we specialize in expert AC installation services in Hyderabad for all major brands and models—Split AC, Window AC, Cassette AC, Ductable Units, and Centralized Air Conditioning Systems. Our certified technicians ensure perfect installation, optimal cooling performance, and long-term efficiency.
            </p>
            <button className="install-btn">Contact Us</button>
          </div>
          <div className="install-hero-image-wrapper">
            <img src={techImage} alt="AC Technician Installing Air Conditioner" className="install-hero-image" />
          </div>
        </div>
      </section>

      {/* 2. WHY PROFESSIONAL INSTALLATION (WARNING CARDS) */}
      <section className="install-warnings-section">
        <h2 className="install-section-heading fade-up-element" ref={addToRefs}>Why Choose Professional AC Installation?</h2>
        <div className="install-warnings-grid">
          <div className="warning-card fade-up-element" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
            <span className="warning-icon">⚠️</span>
            <div className="warning-title">Poor Cooling Efficiency</div>
            <div className="warning-desc">Incorrect placement or sizing leads to uneven temperature and poor airflow.</div>
          </div>
          <div className="warning-card fade-up-element" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
            <span className="warning-icon">⚠️</span>
            <div className="warning-title">Higher Electricity Bills</div>
            <div className="warning-desc">Improper wiring or sealant can cause the system to overwork, consuming more power.</div>
          </div>
          <div className="warning-card fade-up-element" ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
            <span className="warning-icon">⚠️</span>
            <div className="warning-title">Frequent Breakdowns</div>
            <div className="warning-desc">Bad installations are the leading cause of early gas leaks and compressor stress.</div>
          </div>
          <div className="warning-card fade-up-element" ref={addToRefs} style={{ transitionDelay: '0.4s' }}>
            <span className="warning-icon">⚠️</span>
            <div className="warning-title">Shorter Lifespan</div>
            <div className="warning-desc">A poorly installed unit will wear out significantly faster than a properly fitted one.</div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES (INFOGRAPHIC TIMELINE) */}
      <section className="install-services-section">
        <h2 className="install-section-heading fade-up-element" ref={addToRefs}>Installation Excellence</h2>
        <div className="scrap-services-shell max-w-[1100px] mx-auto">
          <div className="scrap-services-path" aria-hidden="true" style={{ height: '672px' }}>
            <svg
              viewBox="0 0 300 700"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="arcGradInstall" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#064e3b" />
                </linearGradient>
                <filter id="nodeGlowInstall" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              <path
                d="M 298 20 A 300 330 0 0 0 298 652"
                fill="none"
                stroke="url(#arcGradInstall)"
                strokeWidth="46"
                strokeLinecap="round"
                opacity="0.3"
              />

              <path
                d="M 230 56 C 180 80, 140 130, 150 168 C 160 206, 200 240, 195 280 C 190 320, 140 350, 145 392 C 150 434, 190 470, 185 504 C 180 538, 140 570, 145 616"
                fill="none"
                stroke="#064e3b"
                strokeWidth="2"
                strokeDasharray="5 12"
                opacity="0.35"
              />

              {[
                [230, 56], [150, 168], [195, 280], [145, 392], [185, 504], [145, 616]
              ].map(([cx, cy], i) => (
                <g key={i} filter="url(#nodeGlowInstall)">
                  <circle cx={cx} cy={cy} r="14" fill="#ffffff" stroke="#064e3b" strokeWidth="2.5" />
                  <circle cx={cx} cy={cy} r="6"  fill="#10b981" />
                </g>
              ))}
            </svg>
          </div>

          <div className="scrap-services-timeline flex flex-col gap-8 py-4">
            {[
              { title: "Split AC Installation", desc: "Expert wall mounting, wiring, and outdoor unit placement for perfectly quiet operation." },
              { title: "Window AC Installation", desc: "Secure frame fitting and precision sealing to prevent rattling or hot air leaks." },
              { title: "Ductable & Cassette AC", desc: "Refined ceiling integration for discrete, powerful cooling in commercial spaces." },
              { title: "Centralized AC Installation", desc: "End-to-end setups for massive complexes requiring precision load balancing." },
              { title: "Copper Pipe Pre-Installation", desc: "Concealed piping and internal infrastructure laid down during property construction." },
              { title: "AC Replacement & Relocation", desc: "Safe uninstallation, transport, and careful reinstallation in your new location." }
            ].map((service, idx) => (
              <div className="scrap-offer-card scrap-timeline-step install-infographic-card" key={idx}>
                <div className="scrap-offer-meta flex items-center flex-1">
                  <span className="scrap-step-badge">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="scrap-offer-copy ml-4">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
                <div className="offer-icon w-12 h-12 rounded-xl bg-white/12 text-white flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRUST SECTION */}
      <section className="install-trust-section">
        <div className="install-trust-container fade-up-element" ref={addToRefs}>
          <div className="install-trust-content">
            <h2>Why Hyderabad AC Services?</h2>
            <div className="trust-checklist">
              {[
                "Experienced & Certified Technicians",
                "Affordable Pricing (No Hidden Charges)",
                "High-Quality Materials",
                "Installation for All Major Brands",
                "Same-Day / Next-Day Service",
                "Post-Installation Performance Check"
              ].map((item, idx) => (
                <div className="trust-item" key={idx}>
                  <svg className="trust-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div></div>{/* Empty div for grid offset if desired, or can be filled with an abstract graphic */}
        </div>
      </section>

      {/* 5. FINAL CTA BANNER */}
      <section className="install-cta-banner">
        <div className="fade-up-element" ref={addToRefs}>
          <h2>Don’t compromise your comfort with poor installation.</h2>
          <button className="install-btn install-btn-inverse">Book Installation Now</button>
        </div>
      </section>

    </div>
  );
}
