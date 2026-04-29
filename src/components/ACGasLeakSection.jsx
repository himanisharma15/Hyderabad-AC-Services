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

          <div className="gasleak-features">
            <div className="gasleak-feature-card">
              <div className="gasleak-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <span className="gasleak-feature-text">Detect leaks accurately using advanced tools</span>
            </div>
            <div className="gasleak-feature-card">
              <div className="gasleak-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <span className="gasleak-feature-text">Seal and repair leaks permanently</span>
            </div>
            <div className="gasleak-feature-card">
              <div className="gasleak-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <span className="gasleak-feature-text">Recharge gas to optimal levels</span>
            </div>
            <div className="gasleak-feature-card">
              <div className="gasleak-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <span className="gasleak-feature-text">Reduce electricity bills</span>
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
