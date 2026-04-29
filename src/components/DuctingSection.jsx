import React, { useEffect, useRef } from 'react';
import './DuctingSection.css';
import ductImage from '../assets/hvac-ducting-3d.png';

export default function DuctingSection() {
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
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="ducting-section">
      <div className="ducting-container" ref={containerRef}>
        
        {/* Left Side: Content */}
        <div className="ducting-content">
          <span className="ducting-tagline">
            Smart Ducting. Seamless Airflow. Precision Cooling Starts Here.
          </span>
          <h2 className="ducting-heading">
            DUCTING CONTRACTORS IN HYDERABAD
          </h2>
          <p className="ducting-description">
            At Hyderabad AC Services, we specialize in custom ducting solutions for HVAC systems—designed for efficiency, durability, and noise-free airflow. Whether you're setting up a Centralized AC System, Ventilation System, Commercial Exhaust Setup, or industrial exhaust, we deliver precision and performance.
          </p>
          
          <h3 className="ducting-subheading">We offer complete ducting solutions, including:</h3>
          
          <ul className="ducting-list">
            <li className="ducting-list-item">
              <span className="ducting-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </span>
              Air Duct Installation, Design &amp; Layout Planning
            </li>
            <li className="ducting-list-item">
              <span className="ducting-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </span>
              Exhaust Duct Installation &amp; Maintenance
            </li>
            <li className="ducting-list-item">
              <span className="ducting-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </span>
              Fabrication &amp; Installation of AC Ducts
            </li>
            <li className="ducting-list-item">
              <span className="ducting-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </span>
              Diffuser, Grill, and Damper Installation
            </li>
          </ul>

          <button className="ducting-cta">
            Contact Us
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="ducting-image-wrapper">
          <img 
            src={ductImage} 
            alt="3D Industrial HVAC Ducting System" 
            className="ducting-image"
          />
        </div>

      </div>
    </section>
  );
}
