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

      {/* 3. SERVICES GRID */}
      <section className="install-services-section">
        <h2 className="install-section-heading fade-up-element" ref={addToRefs}>Our AC Installation Services Include</h2>
        <div className="install-services-grid">
          {[
            { title: "Split AC Installation", desc: "Expert wall mounting, wiring, and outdoor unit placement for perfectly quiet operation." },
            { title: "Window AC Installation", desc: "Secure frame fitting and precision sealing to prevent rattling or hot air leaks." },
            { title: "Ductable & Cassette AC", desc: "Refined ceiling integration for discrete, powerful cooling in commercial spaces." },
            { title: "Centralized AC Installation", desc: "End-to-end setups for massive complexes requiring precision load balancing." },
            { title: "Copper Pipe Pre-Installation", desc: "Concealed piping and internal infrastructure laid down during property construction." },
            { title: "AC Replacement & Relocation", desc: "Safe uninstallation, transport, and careful reinstallation in your new location." }
          ].map((service, idx) => (
            <div className="service-card fade-up-element" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
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
