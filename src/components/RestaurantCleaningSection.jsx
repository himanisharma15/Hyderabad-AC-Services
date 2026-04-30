import { useEffect, useRef } from 'react';
import { Settings, ShieldCheck, Wind, CheckCircle, Droplets, Activity, Building, Zap } from 'lucide-react';
import './ExhaustAMCSection.css';

export default function RestaurantCleaningSection() {
  const elementsRef = useRef([]);

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

  return (
    <div className="amc-page">
      <section className="amc-hero">
        <div className="amc-hero-container is-visible" ref={addToRefs}>
          <div className="amc-hero-content">
            <div className="amc-eyebrow">Commercial Kitchen Hygiene</div>
            <h1 className="amc-hero-heading">Restaurant Exhaust Cleaning</h1>
            <h2 className="amc-hero-subheading">Keep your kitchen safe, hygienic & fire-free</h2>
            <p className="amc-hero-desc">
              Premium hood, duct, filter, and exhaust fan cleaning for busy commercial kitchens that need clean airflow, safer operation, and a sharper hygiene standard.
            </p>
            <div className="amc-hero-tags">
              <span>Deep Degreasing</span>
              <span>Commercial Care</span>
              <span>Fire Prevention</span>
            </div>
            <div className="amc-hero-actions">
              <a href="/contact" className="amc-btn">Book Cleaning</a>
              <p className="amc-hero-note">Reduce fire hazards and improve air quality with our specialized deep cleaning.</p>
            </div>
            <div className="amc-stats-row">
              {[
                { value: '100%', label: 'Grease Removal' },
                { value: 'Zero', label: 'Fire Hazard' },
                { value: '24/7', label: 'Support Available' }
              ].map((stat, idx) => (
                <div className="amc-stat-card" key={idx}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="amc-graphic-wrapper">
            <div className="amc-hero-image-wrapper">
              <img src="/images /real_cleaning_hero.png" alt="Exhaust Cleaning" className="amc-hero-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="amc-includes">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Why Exhaust Cleaning is Important</h2>
        <div className="amc-includes-grid">
          {[
            { title: "Removes Grease & Smoke", desc: "Clears sticky buildup from high-use kitchen exhaust paths.", icon: <Droplets size={32} /> },
            { title: "Prevents Fire Hazards", desc: "Reduces combustible deposits in hoods, ducts, and fans.", icon: <Zap size={32} /> },
            { title: "Improves Air Quality", desc: "Helps remove heat, odor, fumes, and stale kitchen air.", icon: <Wind size={32} /> },
            { title: "Boosts System Efficiency", desc: "Restores smooth airflow and lowers stress on equipment.", icon: <Activity size={32} /> },
            { title: "Health Compliance", desc: "Meet strict local food safety and health department codes.", icon: <ShieldCheck size={32} /> },
            { title: "Extends Equipment Life", desc: "Regular cleaning prevents fatal mechanical failures in motors.", icon: <Settings size={32} /> }
          ].map((item, idx) => (
            <div className="amc-include-card amc-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="include-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="amc-benefits">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>What We Clean</h2>
        <div className="benefits-highlight-grid amc-fade-up" ref={addToRefs}>
          {[
            "Kitchen Hoods",
            "Exhaust Ducts",
            "Baffle Filters",
            "Exhaust Fans",
            "Surface Degreasing"
          ].map((item, idx) => (
            <div className="benefit-highlight" key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="amc-who">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Ideal For</h2>
        <div className="who-needs-grid who-needs-grid-4">
          {[
            { title: "Restaurants", icon: <Activity size={32} /> },
            { title: "Hotels", icon: <Building size={32} /> },
            { title: "Cloud Kitchens", icon: <Activity size={32} /> },
            { title: "Food Courts", icon: <Activity size={32} /> }
          ].map((who, idx) => (
            <div className="who-needs-card amc-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              {who.icon}
              <h4>{who.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="amc-workflow">
        <h2 className="amc-section-title amc-fade-up" ref={addToRefs}>Our Cleaning Process</h2>
        <div className="amc-workflow-wrap amc-fade-up" ref={addToRefs}>
          <div className="amc-step-line"></div>
          {[
            { step: "Inspection", icon: <Wind size={32} /> },
            { step: "Grease Removal", icon: <Droplets size={32} /> },
            { step: "Deep Cleaning", icon: <Settings size={32} /> },
            { step: "Sanitization", icon: <ShieldCheck size={32} /> },
            { step: "Final Testing", icon: <Activity size={32} /> }
          ].map((item, idx) => (
            <div className="amc-step" key={idx}>
              <div className="amc-step-icon">{item.icon}</div>
              <span>{idx + 1}. {item.step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="amc-cta">
        <div className="amc-fade-up" ref={addToRefs}>
          <h2>Keep Your Kitchen Safe & Compliant</h2>
          <a href="/contact" className="amc-btn amc-btn-inverse">Schedule Cleaning</a>
        </div>
      </section>

    </div>
  );
}
