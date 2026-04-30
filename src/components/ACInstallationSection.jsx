import React, { useEffect, useRef } from 'react';
import './ACInstallationSection.css';
import techImage from '../assets/ac-install-tech.png';

const whatsappUrl = 'https://wa.me/918712322475?text=Hi%2C%20I%20need%20AC%20installation%20service.';

const trustFeatures = [
  {
    title: 'Experienced & Certified Technicians',
    desc: 'Skilled installation team for split, window, ductable, and centralized AC systems.',
  },
  {
    title: 'Affordable Pricing',
    desc: 'Clear estimates with no hidden charges before work begins.',
  },
  {
    title: 'High-Quality Materials',
    desc: 'Reliable copper piping, insulation, brackets, wiring, and fittings.',
  },
  {
    title: 'All Major Brands',
    desc: 'Installation support for leading residential and commercial AC brands.',
  },
  {
    title: 'Same-Day / Next-Day Service',
    desc: 'Fast scheduling across Hyderabad for urgent installation needs.',
  },
  {
    title: 'Performance Check',
    desc: 'Post-installation testing for airflow, cooling, drainage, and stability.',
  },
];

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
      <section className="install-hero" style={{ '--install-hero-bg': `url(${techImage})` }}>
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
            <a
              className="install-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Hyderabad AC Services on WhatsApp for AC installation"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY PROFESSIONAL INSTALLATION (WARNING CARDS) */}
      <section className="install-warnings-section">
        <h2 className="install-section-heading fade-up-element" ref={addToRefs}>Why Choose Professional AC Installation?</h2>
        <div className="install-warnings-grid">
          <div
            className="warning-card fade-up-element"
            ref={addToRefs}
            style={{ transitionDelay: '0.1s', '--warning-delay': '90ms' }}
          >
            <div className="warning-title">Poor Cooling Efficiency</div>
            <div className="warning-desc">Incorrect placement or sizing leads to uneven temperature and poor airflow.</div>
          </div>
          <div
            className="warning-card fade-up-element"
            ref={addToRefs}
            style={{ transitionDelay: '0.2s', '--warning-delay': '180ms' }}
          >
            <div className="warning-title">Higher Electricity Bills</div>
            <div className="warning-desc">Improper wiring or sealant can cause the system to overwork, consuming more power.</div>
          </div>
          <div
            className="warning-card fade-up-element"
            ref={addToRefs}
            style={{ transitionDelay: '0.3s', '--warning-delay': '270ms' }}
          >
            <div className="warning-title">Frequent Breakdowns</div>
            <div className="warning-desc">Bad installations are the leading cause of early gas leaks and compressor stress.</div>
          </div>
          <div
            className="warning-card fade-up-element"
            ref={addToRefs}
            style={{ transitionDelay: '0.4s', '--warning-delay': '360ms' }}
          >
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
            <div
              className="service-card fade-up-element"
              ref={addToRefs}
              style={{
                transitionDelay: `${idx * 0.1}s`,
                '--card-delay': `${idx * 90}ms`,
              }}
              key={idx}
            >
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
            <span className="install-trust-kicker">Features</span>
            <h2>Why Hyderabad AC Services?</h2>
            <p>
              Reliable AC installation with careful planning, clean execution, and final
              performance checks for long-term comfort.
            </p>
            <a
              className="install-trust-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book Service
            </a>
          </div>

          <div className="trust-feature-grid">
            {trustFeatures.map((feature, idx) => (
              <article className="trust-feature" key={feature.title}>
                <span className="trust-feature-icon">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
