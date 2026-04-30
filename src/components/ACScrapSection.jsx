import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Truck, Banknote, Package, PhoneCall, Calculator, CheckCircle, ChevronDown, Home, Building2, Factory, Hotel } from 'lucide-react';
import './ACScrapSection.css';
import scrapImage from '../assets/ac-scrap-hero.png';

export default function ACScrapSection() {
  const elementsRef = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);

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
    <div className="scrap-page">
      
      {/* 1. HERO SECTION */}
      <section className="scrap-hero">
        <div className="scrap-hero-container scrap-fade-up" ref={addToRefs}>
          <div className="scrap-hero-content">
            <h1 className="scrap-hero-heading">AC Scrap Dealer in Hyderabad</h1>
            <h2 className="scrap-hero-subheading">Sell Your Old ACs at the Best Price</h2>
            <p className="scrap-hero-desc">
              Upgrade your cooling efficiently. We buy non-functional, obsolete, and old air conditioners for top market value with free doorstep pickup.
            </p>
            <button className="scrap-btn">Get Scrap Value</button>
          </div>
          <div className="scrap-hero-image-wrapper">
            <img src={scrapImage} alt="Organized AC Units in Recycling Depot" className="scrap-hero-image" />
          </div>
        </div>
      </section>

      {/* 2. SERVICES (INFOGRAPHIC TIMELINE) */}
      <section className="scrap-services">
        <h2 className="scrap-section-title scrap-fade-up" ref={addToRefs}>What We Offer</h2>
        <div className="scrap-services-shell">
          <div className="scrap-services-path" aria-hidden="true">
            {/*
              Math behind node alignment:
              - SVG viewBox: 300 × 600, preserveAspectRatio="none" in a 280×560px container
              - Card height: 80px, gap: 32px, padding: 16px
              - Total height: 16 + 5×80 + 4×32 + 16 = 560px
              - Card centers in px: 56, 168, 280, 392, 504
              - Scaled to viewBox (×600/560): 60, 180, 300, 420, 540
            */}
            <svg
              viewBox="0 0 300 600"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="arcGradV" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#22d3ee" />
                  <stop offset="45%"  stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.75" />
                </linearGradient>
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Large semi-circle: center (300,300), radius 280 — perfectly smooth vertical arc */}
              <path
                d="M 298 20 A 280 280 0 0 0 298 580"
                fill="none"
                stroke="url(#arcGradV)"
                strokeWidth="46"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Dashed S-curve path through the 5 nodes */}
              <path
                d="M 230 60
                   C 196 90,  154 140, 157 180
                   C 160 220, 190 266, 186 300
                   C 182 334, 147 380, 151 420
                   C 155 460, 182 508, 178 540"
                fill="none"
                stroke="#1e3a5f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="5 12"
                opacity="0.55"
              />

              {/* 5 nodes — y values mathematically aligned with card centers */}
              {[
                [230, 60],
                [157, 180],
                [186, 300],
                [151, 420],
                [178, 540],
              ].map(([cx, cy], i) => (
                <g key={i} filter="url(#nodeGlow)">
                  <circle cx={cx} cy={cy} r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
                  <circle cx={cx} cy={cy} r="6"  fill="#0ea5e9" />
                </g>
              ))}
            </svg>
          </div>

          <div className="scrap-services-timeline">
            {[
              { title: "Buy Old AC Units", desc: "We accept window, split, cassette, and centralized systems.", icon: <Package size={28} /> },
              { title: "Free Pickup", desc: "Zero transportation or uninstallation charges.", icon: <Truck size={28} /> },
              { title: "Instant Payment", desc: "Cash, UPI, or bank transfer right at your doorstep.", icon: <Banknote size={28} /> },
              { title: "Eco-Friendly Recycling", desc: "Responsible dismantling and hazardous gas disposal.", icon: <Leaf size={28} /> },
              { title: "Bulk Collection", desc: "B2B solutions for replacing enterprise climate networks.", icon: <Building2 size={28} /> }
            ].map((offer, idx) => (
              <div className="scrap-offer-card scrap-fade-up scrap-timeline-step" ref={addToRefs} style={{ transitionDelay: `${idx * 0.12}s` }} key={idx}>
                <div className="scrap-offer-meta">
                  <span className="scrap-step-badge">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="scrap-offer-copy">
                    <h3>{offer.title}</h3>
                    <p>{offer.desc}</p>
                  </div>
                </div>
                <div className="offer-icon">{offer.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO CAN SELL (SMALL CARDS) */}
      <section className="scrap-who">
        <h2 className="scrap-section-title scrap-fade-up" ref={addToRefs}>Who Can Sell?</h2>
        <div className="who-grid">
          {[
            { title: "Homeowners", icon: <Home size={32} /> },
            { title: "Offices", icon: <Building2 size={32} /> },
            { title: "Factories", icon: <Factory size={32} /> },
            { title: "Hotels", icon: <Hotel size={32} /> }
          ].map((who, idx) => (
            <div className="who-card scrap-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="who-icon">{who.icon}</div>
              <h4>{who.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (WORKFLOW) */}
      <section className="scrap-workflow">
        <h2 className="scrap-section-title scrap-fade-up" ref={addToRefs}>How It Works</h2>
        <div className="scrap-workflow-wrap scrap-fade-up" ref={addToRefs}>
          <div className="scrap-line"></div>
          {[
            { step: "Request Pickup", icon: <PhoneCall size={32} /> },
            { step: "Get Price", icon: <Calculator size={32} /> },
            { step: "Schedule Pickup", icon: <Truck size={32} /> },
            { step: "Get Paid", icon: <Banknote size={32} /> }
          ].map((item, idx) => (
            <div className="scrap-step" key={idx}>
              <div className="scrap-step-icon">{item.icon}</div>
              <span>Step {idx + 1}: {item.step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US (HIGHLIGHTS) */}
      <section className="scrap-why">
        <div className="scrap-trust-grid scrap-fade-up" ref={addToRefs}>
          {[
            "Best Market Price",
            "Free Safe Uninstallation",
            "Trusted Service",
            "Eco-Friendly Disposal",
            "Quick Documentation"
          ].map((item, idx) => (
            <div className="scrap-trust-card" key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="scrap-faq">
        <h2 className="scrap-section-title scrap-fade-up" ref={addToRefs}>FAQs</h2>
        <div className="scrap-faq-container scrap-fade-up" ref={addToRefs}>
          {[
            { q: "Do you provide doorstep pickup?", a: "Yes. Our team will visit your location to evaluate, uninstall, and transport the AC unit entirely free of cost." },
            { q: "How is the exact scrap price calculated?", a: "Pricing depends on the tonnage (1 Ton, 1.5 Ton, 2 Ton), type of AC (Window/Split), compressor condition, and current copper market rates." },
            { q: "Do you handle bulk scrap from offices?", a: "Absolutely. We specialize in B2B removal and disposal of bulk HVAC hardware from IT parks, hotels, and retail complexes." },
            { q: "Which brands do you accept?", a: "We accept every brand globally, regardless of age or physical condition." }
          ].map((faq, idx) => (
            <div className={`s-faq-item ${activeFaq === idx ? 'active' : ''}`} key={idx}>
              <button className="s-faq-question" onClick={() => toggleFaq(idx)}>
                {faq.q}
                <ChevronDown className="s-faq-icon" size={20} />
              </button>
              <div className="s-faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



    </div>
  );
}
