import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, IndianRupee, Search, ShieldCheck, TrendingUp, X } from 'lucide-react';
import './ACGasLeakSection.css';
import technicianImage from '../assets/ac-technician.png';

const whatsappUrl = 'https://wa.me/918712322475?text=Hi%2C%20I%20need%20AC%20gas%20leak%20repair%20service.';

const gasLeakFeatures = [
  {
    Icon: Search,
    title: 'Detect leaks accurately using advanced tools',
    popup:
      'We inspect refrigerant lines, flare joints, coils, valves, and pressure behavior to locate the actual leak point before repair.',
    points: ['Pressure diagnostics', 'Joint and coil checks', 'Clear fault reporting'],
  },
  {
    Icon: ShieldCheck,
    title: 'Seal and repair leaks permanently',
    popup:
      'Our technicians repair the leak source with proper sealing, brazing, and fitting correction methods based on the AC condition.',
    points: ['Root-cause repair', 'Secure fittings', 'Reliable sealing work'],
  },
  {
    Icon: TrendingUp,
    title: 'Recharge gas to optimal levels',
    popup:
      'After leak rectification, we recharge refrigerant to the right operating level so cooling performance returns safely and efficiently.',
    points: ['Correct gas quantity', 'Cooling performance check', 'Final pressure testing'],
  },
  {
    Icon: IndianRupee,
    title: 'Reduce electricity bills',
    popup:
      'A properly repaired and charged AC cools faster, reduces compressor strain, and helps avoid unnecessary power consumption.',
    points: ['Lower compressor load', 'Faster cooling recovery', 'Better energy efficiency'],
  },
];

export default function ACGasLeakSection() {
  const containerRef = useRef(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const SelectedFeatureIcon = selectedFeature?.Icon;

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

  useEffect(() => {
    if (!selectedFeature) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedFeature(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFeature]);

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
            {gasLeakFeatures.map((feature) => (
              <button
                className="gasleak-feature-card"
                key={feature.title}
                type="button"
                onClick={() => setSelectedFeature(feature)}
                aria-haspopup="dialog"
              >
                <span className="gasleak-feature-icon">
                  <feature.Icon size={22} strokeWidth={2.2} />
                </span>
                <span className="gasleak-feature-copy">
                  <span className="gasleak-feature-text">{feature.title}</span>
                  <span className="gasleak-feature-action">View details</span>
                </span>
              </button>
            ))}
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

          <a
            className="gasleak-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact Hyderabad AC Services on WhatsApp for AC gas leak repair"
          >
            Contact Us
            <ArrowRight size={18} strokeWidth={2.3} />
          </a>
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

      {selectedFeature && (
        <div
          className="gasleak-popup-backdrop"
          onClick={() => setSelectedFeature(null)}
          role="presentation"
        >
          <div
            className="gasleak-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gasleak-popup-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gasleak-popup-close"
              type="button"
              onClick={() => setSelectedFeature(null)}
              aria-label="Close service details"
            >
              <X size={18} strokeWidth={2.4} />
            </button>
            <div className="gasleak-popup-icon">
              {SelectedFeatureIcon ? <SelectedFeatureIcon size={28} strokeWidth={2.2} /> : null}
            </div>
            <span className="gasleak-popup-kicker">AC Gas Leak Service</span>
            <h3 id="gasleak-popup-title">{selectedFeature.title}</h3>
            <p>{selectedFeature.popup}</p>
            <ul>
              {selectedFeature.points.map((point) => (
                <li key={point}>
                  <Check size={17} strokeWidth={2.6} />
                  {point}
                </li>
              ))}
            </ul>
            <a className="gasleak-popup-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
              Chat on WhatsApp
              <ArrowRight size={17} strokeWidth={2.4} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
