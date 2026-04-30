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

      {/* 2. SERVICES (CARD GRID) */}
      <section className="scrap-services">
        <h2 className="scrap-section-title scrap-fade-up" ref={addToRefs}>What We Offer</h2>
        <div className="scrap-offer-grid">
          {[
            { title: "Buy Old AC Units",     desc: "We accept window, split, cassette, and centralized systems.", icon: <Package  size={26} /> },
            { title: "Free Pickup",           desc: "Zero transportation or uninstallation charges.",              icon: <Truck    size={26} /> },
            { title: "Instant Payment",       desc: "Cash, UPI, or bank transfer right at your doorstep.",        icon: <Banknote size={26} /> },
            { title: "Eco-Friendly Recycling",desc: "Responsible dismantling and hazardous gas disposal.",        icon: <Leaf     size={26} /> },
            { title: "Bulk Collection",       desc: "B2B solutions for replacing enterprise climate networks.",    icon: <Building2 size={26} /> },
          ].map((offer, idx) => (
            <div
              className="scrap-simple-card scrap-fade-up"
              ref={addToRefs}
              style={{ transitionDelay: `${idx * 0.1}s` }}
              key={idx}
            >
              <div className="scrap-card-icon">{offer.icon}</div>
              <h3 className="scrap-card-title">{offer.title}</h3>
              <p className="scrap-card-desc">{offer.desc}</p>
            </div>
          ))}
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
