import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Wrench, Wind, ShieldCheck, ThermometerSnowflake, Ruler, PhoneCall, CheckCircle, Search } from 'lucide-react';
import './HomePage.css';
import heroImage from '../assets/home-hero.png';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ onBookNow }) {
  const elementsRef = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const navigate = useNavigate();

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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="home-hero">
        <div className="hero-container scroll-fade" ref={addToRefs}>
          <div className="hero-content">
            <h1 className="hero-heading">Premium Climate Control & HVAC Solutions</h1>
            <p className="hero-desc">
              Experience intelligent heating, ventilation, and air conditioning services engineered for absolute comfort and maximum efficiency in Hyderabad.
            </p>
            <button className="btn-primary" onClick={() => onBookNow('General HVAC Consultation')}>
              Book Consultation Now
            </button>
          </div>
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Expert HVAC Technician inspecting a modern AC unit" className="hero-image" />
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="home-services">
        <h2 className="section-title scroll-fade" ref={addToRefs}>Engineered Services Catalog</h2>
        <div className="services-grid">
          {[
            { title: "AC Repair Services", desc: "Diagnostic-first approach to fix hardware faults, gas leaks, and cooling drops.", icon: <Wrench size={26} />, path: '/ac-repair' },
            { title: "Smart Installation", desc: "Precision mounting and load calculation for perfect indoor distribution.", icon: <ThermometerSnowflake size={26} />, path: '/ac-installation' },
            { title: "Ducting Solutions", desc: "Aero-dynamically optimized ducting for commercial and residential hubs.", icon: <Wind size={26} />, path: '/ducting' },
            { title: "Routine Maintenance", desc: "Preventative tune-ups to extend hardware lifespan and reduce energy bills.", icon: <ShieldCheck size={26} />, path: '/ac-service' },
            { title: "Pre-Installation Piping", desc: "High-grade copper routing laid concurrently with property construction.", icon: <Ruler size={26} />, path: '/copper-pipe' },
            { title: "Centralized Systems", desc: "VRF/VRV system integration for multi-zone climate management.", icon: <ThermometerSnowflake size={26} />, path: '/centralized-ac' },
          ].map((svc, idx) => (
            <div 
              className="svc-card scroll-fade" 
              ref={addToRefs} 
              style={{ transitionDelay: `${idx * 0.1}s`, cursor: 'pointer' }} 
              key={idx}
              onClick={() => navigate(svc.path)}
            >
              <div className="svc-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WORKFLOW / PROCESS SECTION */}
      <section className="home-workflow">
        <h2 className="section-title scroll-fade" ref={addToRefs}>Our Workflow</h2>
        <div className="workflow-wrap scroll-fade" ref={addToRefs}>
          <div className="workflow-line"></div>
          {[
            { step: "Request", icon: <PhoneCall size={32} /> },
            { step: "Inspection", icon: <Search size={32} /> },
            { step: "Diagnosis", icon: <Ruler size={32} /> },
            { step: "Execution", icon: <Wrench size={32} /> },
            { step: "Sign-off", icon: <CheckCircle size={32} /> }
          ].map((item, idx) => (
            <div className="work-step" key={idx}>
              <div className="work-icon">{item.icon}</div>
              <span>Step {idx + 1}: {item.step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURES & BENEFITS TITLE / HIGHLIGHT CARDS */}
      <section className="home-features">
        <h2 className="section-title scroll-fade" ref={addToRefs}>The Hyderabad AC Services Standard</h2>
        <div className="features-grid scroll-fade" ref={addToRefs}>
          {[
            "Certified Expert Technicians",
            "Transparent Upfront Pricing",
            "Same-Day SLA Compliance",
            "Advanced Diagnostic Tools",
            "1-Year Service Guarantee",
            "Genuine Manufacturer Parts"
          ].map((item, idx) => (
            <div className="feat-card" key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5 & 7. FAQ SECTION */}
      <section className="home-faq">
        <h2 className="section-title scroll-fade" ref={addToRefs}>Frequently Asked Questions</h2>
        <div className="faq-container scroll-fade" ref={addToRefs}>
          {[
            { q: "Do you support all AC brands?", a: "Yes, our technicians are certified to handle Daikin, Blue Star, Voltas, Carrier, LG, Samsung, and other leading global brands." },
            { q: "How quickly can you dispatch a technician?", a: "For emergency repair queries in the greater Hyderabad region, we dispatch a technician within 2-4 hours on the same business day." },
            { q: "Is there a warranty on your repairs?", a: "Absolutely. We provide a comprehensive service warranty. If the same issue persists post-repair, we evaluate and rectify it without additional labor charges." },
            { q: "Do you undertake commercial maintenance contracts (AMC)?", a: "Yes, we specialize in Annual Maintenance Contracts for enterprise, IT parks, and heavy commercial deployments, securing maximum uptime." }
          ].map((faq, idx) => (
            <div className={`faq-item ${activeFaq === idx ? 'active' : ''}`} key={idx}>
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                {faq.q}
                <ChevronDown className="faq-icon" size={20} />
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
