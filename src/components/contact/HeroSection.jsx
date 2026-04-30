
import React from 'react';
import './HeroSection.css';
import acVideo from '../From KlickPin CF AC Repairing Service in Patna [Video] _ Air conditioner repair Ac repair Repair - Pin-688487861786062714.mp4';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background video */}
      <video 
        className="hero-bg-video" 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
      >
        <source 
          src={acVideo} 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content-wrapper">
        <div className="hero-text-section">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">We're here to help with your AC service needs. Our expert team handles repairs, maintenance, and installations. Reach out and let us know how we can serve you.</p>
          <a href="https://api.whatsapp.com/send/?phone=918712322475&text&app_absent=0" className="hero-cta" aria-label="Get a Quote" target="_blank" rel="noopener noreferrer">
            <span className="hero-cta-text">Get a Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
