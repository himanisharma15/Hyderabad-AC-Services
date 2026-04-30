import { useEffect, useRef, useState } from 'react';
import { Leaf, Truck, Banknote, Package, PhoneCall, Calculator, CheckCircle, ChevronDown, Home, Building2, Factory, Hotel, Recycle, Wrench } from 'lucide-react';
import './ACScrapSection.css';

export default function ACScrapSection() {
  const elementsRef = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const elements = elementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
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
            <div className="scrap-eyebrow">Eco-Friendly Disposal</div>
            <h1 className="scrap-hero-heading">AC Scrap Dealer <br /><span>in Hyderabad</span></h1>
            <h2 className="scrap-hero-subheading">Sell Your Old ACs at the Best Market Price</h2>
            <p className="scrap-hero-desc">
              Upgrade your cooling efficiently. We buy non-functional, obsolete, and old air conditioners for top market value with free doorstep uninstallation and pickup.
            </p>
            
            <div className="scrap-hero-tags">
              <span>Best Scrap Rates</span>
              <span>Free Doorstep Pickup</span>
              <span>Instant Cash Payment</span>
            </div>

            <div className="scrap-hero-actions">
              <a href="/contact" className="scrap-btn">Get Instant Quote</a>
              <p className="scrap-hero-note">We accept all brands and conditions.</p>
            </div>

            <div className="scrap-stats-row">
              {[
                { value: 'Best Price', label: 'Market Guaranteed' },
                { value: 'Zero', label: 'Pickup Charges' },
                { value: 'Instant', label: 'Spot Payment' }
              ].map((stat, idx) => (
                <div className="scrap-stat-card" key={idx}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="scrap-graphic-wrapper">
            <div className="scrap-hero-image-wrapper">
              <img src="/images/ac_scrap_hero.png" alt="AC Recycling" className="scrap-hero-image" />
              <div className="scrap-image-badge">
                <Recycle size={20} />
                <span>Eco-Recyclers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES (CARD GRID) */}
      <section className="scrap-services">
        <div className="section-header scrap-fade-up" ref={addToRefs}>
          <h2 className="scrap-section-title">Why Sell To Us?</h2>
          <p className="scrap-section-desc">We offer a seamless, profitable, and eco-friendly way to dispose of your old AC units.</p>
        </div>
        <div className="scrap-offer-grid">
          {[
            { title: "Any AC Type",     desc: "We buy window, split, cassette, and large centralized chillers.", icon: <Package  size={32} /> },
            { title: "Free Uninstallation", desc: "Our technicians handle the removal safely without damaging your walls.",  icon: <Wrench    size={32} /> },
            { title: "Spot Payment",       desc: "Get paid instantly via Cash, UPI, or Bank Transfer upon pickup.",        icon: <Banknote size={32} /> },
            { title: "Eco Disposal",desc: "We ensure 100% eco-friendly recycling and safe gas recovery.",        icon: <Leaf     size={32} /> },
            { title: "Bulk Solutions",       desc: "Custom removal plans for corporate offices and industrial sites.",    icon: <Building2 size={32} /> },
            { title: "Fair Valuation",      desc: "Prices based on current copper and metal market rates.",             icon: <Calculator size={32} /> }
          ].map((offer, idx) => (
            <div className="scrap-simple-card scrap-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="scrap-card-icon">{offer.icon}</div>
              <h3 className="scrap-card-title">{offer.title}</h3>
              <p className="scrap-card-desc">{offer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHO CAN SELL (SMALL CARDS) */}
      <section className="scrap-who">
        <h2 className="scrap-section-title scrap-fade-up" ref={addToRefs}>We Buy From</h2>
        <div className="who-grid">
          {[
            { title: "Residential", icon: <Home size={32} /> },
            { title: "IT Parks & Offices", icon: <Building2 size={32} /> },
            { title: "Industries", icon: <Factory size={32} /> },
            { title: "Hospitals & Hotels", icon: <Hotel size={32} /> }
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
        <h2 className="scrap-section-title scrap-fade-up" ref={addToRefs}>Our Simple Process</h2>
        <div className="scrap-workflow-wrap scrap-fade-up" ref={addToRefs}>
          <div className="scrap-step-line"></div>
          {[
            { step: "Send Request", icon: <PhoneCall size={32} /> },
            { step: "Get Evaluation", icon: <Calculator size={32} /> },
            { step: "Free Removal", icon: <Truck size={32} /> },
            { step: "Instant Payment", icon: <Banknote size={32} /> }
          ].map((item, idx) => (
            <div className="scrap-step" key={idx}>
              <div className="scrap-step-icon">{item.icon}</div>
              <span>{idx + 1}. {item.step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US (HIGHLIGHTS) */}
      <section className="scrap-why">
        <div className="scrap-trust-grid scrap-fade-up" ref={addToRefs}>
          {[
            "Best Price Guaranteed",
            "Professional Team",
            "Zero Removal Fees",
            "Eco-Safe Recycling",
            "Immediate Payouts"
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
        <div className="section-header scrap-fade-up" ref={addToRefs}>
          <h2 className="scrap-section-title">Common Questions</h2>
        </div>
        <div className="scrap-faq-container scrap-fade-up" ref={addToRefs}>
          {[
            { q: "Is uninstallation really free?", a: "Yes, our team handles the entire uninstallation and removal process at no extra cost to you." },
            { q: "How do you determine the price?", a: "We calculate the price based on tonnage, AC type (Window/Split), and current metal market value (copper/aluminum)." },
            { q: "Do you buy non-working units?", a: "Absolutely. We buy ACs in any condition—dead, damaged, or completely non-functional." },
            { q: "Do you handle bulk removals?", a: "Yes, we specialize in bulk AC scrap removal from commercial buildings, hospitals, and IT companies." }
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


