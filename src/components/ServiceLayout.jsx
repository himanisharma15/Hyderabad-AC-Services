import { useEffect } from 'react';
import { 
  Snowflake, Zap, Droplets, Wind, Volume2, ShieldAlert, Cpu, Settings, 
  Wrench, Search, Activity, CheckCircle, ShieldCheck, Clock, Shield, MapPin, Phone, Fan, Star,
  Award, Zap as ZapIcon, HardHat, ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ServiceLayout.module.css';

const iconMap = {
  Snowflake: <Snowflake size={32} />,
  Zap: <ZapIcon size={32} />,
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

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServiceLayout({ data, onBookNow }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  if (!data) return null;

  return (
    <div className={styles.page}>
      
      {/* DECORATIVE BACKGROUND BLOBS */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContainer}
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.div className={styles.heroContent} variants={fadeUpItem}>
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
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img src={data.heroImage} alt={data.title} className={styles.heroImage} />
              <div className={styles.glassOverlay}></div>
              <motion.div 
                className={styles.floatingCard}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className={styles.floatingIcon}><CheckCircle size={20} /></div>
                <div>
                  <strong>Guaranteed Fix</strong>
                  <p>100% Peace of Mind</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className={styles.intro}>
        <motion.div 
          className={styles.introContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className={styles.introHeader} variants={fadeUpItem}>
            <div className={styles.line}></div>
            <h2 className={styles.sectionHeading}>The Professional Standard</h2>
            <div className={styles.line}></div>
          </motion.div>
          <motion.p className={styles.introText} variants={fadeUpItem}>
            {data.introduction}
          </motion.p>
        </motion.div>
      </section>

      {/* 3. BENEFITS GRID */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpItem}
          >
            <h2 className={styles.sectionHeading}>Service Advantages</h2>
            <p className={styles.sectionDesc}>Why leading businesses and homeowners choose our technical expertise.</p>
          </motion.div>
          <motion.div 
            className={styles.benefitsGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {data.benefits.map((benefit, idx) => (
              <motion.div className={styles.benefitCard} variants={fadeUpItem} key={idx}>
                <div className={styles.cardHeader}>
                  <div className={styles.benefitIconBox}>
                    {iconMap[benefit.icon] || <ShieldCheck size={24} />}
                  </div>
                  <span className={styles.cardNumber}>0{idx + 1}</span>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <div className={styles.cardAccent}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. TECHNICAL COMPLIANCE SECTION */}
      <section className={styles.specs}>
        <motion.div 
          className={styles.specsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className={styles.specsVisual} variants={fadeUpItem}>
            <div className={styles.specsIconLarge}>
              <HardHat size={48} />
            </div>
            <motion.div 
              className={styles.specsCircle}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </motion.div>
          <motion.div className={styles.specsContent} variants={fadeUpItem}>
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
          </motion.div>
        </motion.div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className={styles.process}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpItem}
          >
            <h2 className={styles.sectionHeading}>Execution Workflow</h2>
            <p className={styles.sectionDesc}>A rigorous process ensures excellence from first contact to final handover.</p>
          </motion.div>
          <motion.div 
            className={styles.processFlow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {data.process.map((step, idx) => (
              <motion.div className={styles.processCard} variants={fadeUpItem} key={idx}>
                <div className={styles.stepBox}>{idx + 1}</div>
                <h4>{step.step}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
