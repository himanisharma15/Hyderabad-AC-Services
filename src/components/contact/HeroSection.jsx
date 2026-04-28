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
          <a href="#contact-form" className="hero-cta">
            <span>Get a Quote</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 12l4-4-4-4M10 2v12"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
