import { useEffect, useRef } from 'react';
import { Wind, ShieldAlert, ThermometerSnowflake, Sparkles, Utensils, ShoppingBag, PlusSquare, Briefcase, Snowflake, CheckCircle, Activity } from 'lucide-react';
import './AirCurtainSection.css';

export default function AirCurtainSection() {
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
    <div className="curtain-page">
      
      {/* 1. HERO SECTION */}
      <section className="curtain-hero">
        <div className="curtain-hero-container curtain-fade-up" ref={addToRefs}>
          <div className="curtain-hero-content">
            <div className="curtain-eyebrow">Advanced Climate Shield</div>
            <h1 className="curtain-hero-heading">High-Velocity <br /><span>Air Curtains</span></h1>
            <h2 className="curtain-hero-subheading">Invisible Barrier for Maximum Protection</h2>
            <p className="curtain-hero-desc">
              Stop dust, heat, and insects at your doorstep. Our industrial air curtains create a high-velocity air shield that slashes cooling costs and maintains hygiene.
            </p>
            
            <div className="curtain-hero-tags">
              <span>90% Heat Block</span>
              <span>Dust & Pest Shield</span>
              <span>Energy Efficient</span>
            </div>

            <div className="curtain-hero-actions">
              <a href="/contact" className="curtain-btn">Request Installation</a>
              <p className="curtain-hero-note">Perfect for commercial and industrial entrances.</p>
            </div>

            <div className="curtain-stats-row">
              {[
                { value: '70%', label: 'Energy Savings' },
                { value: 'Zero', label: 'Dust Entry' },
                { value: 'Instant', label: 'Cooling Retention' }
              ].map((stat, idx) => (
                <div className="curtain-stat-card" key={idx}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="curtain-graphic-wrapper">
            <div className="curtain-hero-image-wrapper">
              <img src="/images/air_curtain_hero.png" alt="Commercial Entrance" className="curtain-hero-image" />
              <div className="curtain-visual-effect">
                <div className="airflow-lines">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="airflow-line" style={{ animationDelay: `${i * 0.3}s` }}></div>
                  ))}
                </div>
              </div>
              <div className="curtain-image-badge">
                <Wind size={20} />
                <span>Smart Airflow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS (CARD UI) */}
      <section className="curtain-benefits">
        <div className="section-header curtain-fade-up" ref={addToRefs}>
          <h2 className="curtain-section-title">The Power of Air Shields</h2>
          <p className="curtain-section-desc">Protect your indoor environment without closing the doors to your customers.</p>
        </div>
        <div className="curtain-benefits-grid">
          {[
            { title: "Dust & Insect Block", desc: "Prevents outside pollutants and flying pests from entering sterile or clean spaces.", icon: <ShieldAlert size={40} /> },
            { title: "Thermal Insulation", desc: "Stops expensive chilled air from escaping, keeping your indoor temperature stable.", icon: <ThermometerSnowflake size={40} /> },
            { title: "Operational Savings", desc: "Reduces the workload on your AC system, leading to significant monthly power savings.", icon: <Activity size={40} /> },
            { title: "Contamination Control", desc: "Essential for hospitals and food industry to prevent cross-contamination from outside.", icon: <Sparkles size={40} /> }
          ].map((benefit, idx) => (
            <div className="curtain-benefit-card curtain-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-text">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. USE CASES (OPTIONAL SMALL CARDS) */}
      <section className="curtain-usecases">
        <h2 className="curtain-section-title curtain-fade-up" ref={addToRefs}>Engineered For</h2>
        <div className="usecases-grid">
          {[
            { title: "Restaurants", icon: <Utensils size={32} /> },
            { title: "Retail Hubs", icon: <ShoppingBag size={32} /> },
            { title: "Hospitals", icon: <PlusSquare size={32} /> },
            { title: "Modern Offices", icon: <Briefcase size={32} /> },
            { title: "Cold Storage", icon: <Snowflake size={32} /> }
          ].map((usecase, idx) => (
            <div className="usecase-card curtain-fade-up" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="usecase-icon">{usecase.icon}</div>
              <h4>{usecase.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRUST HIGHLIGHTS */}
      <section className="curtain-why">
        <div className="curtain-trust-grid curtain-fade-up" ref={addToRefs}>
          {[
            "High Velocity Airflow",
            "Energy Star Certified",
            "Quiet Operation",
            "Durable Construction",
            "Easy Maintenance"
          ].map((item, idx) => (
            <div className="curtain-trust-card" key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
