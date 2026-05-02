import { useEffect, useRef } from 'react';
import { 
  ThermometerSnowflake, ZapOff, Droplets, Wind, Volume2, ShieldAlert, Cpu, Settings, 
  Wrench, Search, Activity, CheckCircle, ShieldCheck, Clock, Shield, Snowflake, Zap, MapPin, Phone, Fan, Star,
  Award, Zap as ZapIcon, HardHat
} from 'lucide-react';
import styles from './ServiceLayout.module.css';

const iconMap = {
  ThermometerSnowflake: <ThermometerSnowflake size={32} />,
  ZapOff: <ZapOff size={32} />,
  Droplets: <Droplets size={32} />,
  Wind: <Wind size={32} />,
  Volume2: <Volume2 size={32} />,
  ShieldAlert: <ShieldAlert size={32} />,
  Cpu: <Cpu size={32} />,
  Settings: <Settings size={32} />,
  Wrench: <Wrench size={32} />,
  Search: <Search size={32} />,
  Activity: <Activity size={32} />,
  CheckCircle: <CheckCircle size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  Clock: <Clock size={32} />,
  Shield: <Shield size={32} />,
  Snowflake: <Snowflake size={32} />,
  Zap: <ZapIcon size={32} />,
  MapPin: <MapPin size={32} />,
  Phone: <Phone size={32} />,
  Fan: <Fan size={32} />,
  Star: <Star size={32} />,
  Award: <Award size={32} />,
  HardHat: <HardHat size={32} />
};

export default function ServiceLayout({ data, onBookNow }) {
  const elementsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const elements = elementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isVisible);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [data]);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  if (!data) return null;

  return (
    <div className={styles.page}>
      
      {/* DECORATIVE BACKGROUND BLOBS */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={`${styles.heroContainer} ${styles.fadeUp}`} ref={addToRefs}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Award size={14} />
              <span>Premium Service Excellence</span>
            </div>
            <h1 className={styles.heroHeading}>
              {data.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? styles.accentText : ''}>{word} </span>
              ))}
            </h1>
            <p className={styles.heroDesc}>
              {data.heroDesc}
            </p>
            
            <div className={styles.heroActions}>
              <div className={styles.heroContact}>
                <div className={styles.contactIcon}><Phone size={18} /></div>
                <div className={styles.contactInfo}>
                  <span>Available 24/7</span>
                  <strong>+91 8712322475</strong>
                </div>
              </div>
            </div>

            <div className={styles.quickTrust}>
              <div className={styles.trustItem}>
                <ShieldCheck size={20} />
                <span>Certified Experts</span>
              </div>
              <div className={styles.trustItem}>
                <Clock size={20} />
                <span>60-Min Response</span>
              </div>
              <div className={styles.trustItem}>
                <Star size={20} />
                <span>Top Rated Service</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.imageWrapper}>
              <img src={data.heroImage} alt={data.title} className={styles.heroImage} />
              <div className={styles.glassOverlay}></div>
              <div className={styles.floatingCard}>
                <div className={styles.floatingIcon}><CheckCircle size={20} /></div>
                <div>
                  <strong>Guaranteed Fix</strong>
                  <p>100% Peace of Mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className={styles.intro}>
        <div className={`${styles.introContainer} ${styles.fadeUp}`} ref={addToRefs}>
          <div className={styles.introHeader}>
            <div className={styles.line}></div>
            <h2 className={styles.sectionHeading}>The Professional Standard</h2>
            <div className={styles.line}></div>
          </div>
          <p className={styles.introText}>{data.introduction}</p>
        </div>
      </section>

      {/* 3. BENEFITS GRID (Glassmorphism Cards) */}
      <section className={styles.benefits}>
        <div className={`${styles.sectionHeader} ${styles.fadeUp}`} ref={addToRefs}>
          <h2 className={styles.sectionHeading}>Service Advantages</h2>
          <p className={styles.sectionDesc}>Why leading businesses and homeowners choose our technical expertise.</p>
        </div>
        <div className={styles.benefitsGrid}>
          {data.benefits.map((benefit, idx) => (
            <div className={`${styles.benefitCard} ${styles.fadeUp}`} ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <div className={styles.cardHeader}>
                <div className={styles.benefitIconBox}>
                  {iconMap[benefit.icon] || <ShieldCheck size={24} />}
                </div>
                <span className={styles.cardNumber}>0{idx + 1}</span>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
              <div className={styles.cardAccent}></div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL COMPLIANCE SECTION */}
      <section className={styles.specs}>
        <div className={`${styles.specsContainer} ${styles.fadeUp}`} ref={addToRefs}>
          <div className={styles.specsVisual}>
            <div className={styles.specsIconLarge}>
              <HardHat size={48} />
            </div>
            <div className={styles.specsCircle}></div>
          </div>
          <div className={styles.specsContent}>
            <h2 className={styles.specsHeading}>Technical Compliance & Safety</h2>
            <p>{data.technicalSpecs}</p>
            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <CheckCircle size={16} />
                <span>ASHRAE Standard Verified</span>
              </div>
              <div className={styles.specItem}>
                <CheckCircle size={16} />
                <span>OSHA Safety Compliant</span>
              </div>
              <div className={styles.specItem}>
                <CheckCircle size={16} />
                <span>Energy Star Efficiency</span>
              </div>
              <div className={styles.specItem}>
                <CheckCircle size={16} />
                <span>EPA Certified Refrigerants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (Modern Timeline) */}
      <section className={styles.process}>
        <div className={`${styles.sectionHeader} ${styles.fadeUp}`} ref={addToRefs}>
          <h2 className={styles.sectionHeading}>Execution Workflow</h2>
          <p className={styles.sectionDesc}>A rigorous process ensures excellence from first contact to final handover.</p>
        </div>
        <div className={styles.processFlow}>
          {data.process.map((step, idx) => (
            <div className={`${styles.processCard} ${styles.fadeUp}`} ref={addToRefs} key={idx}>
              <div className={styles.stepBox}>{idx + 1}</div>
              <h4>{step.step}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
