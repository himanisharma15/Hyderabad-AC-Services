import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Wrench, 
  Settings, 
  Wind, 
  ShieldCheck, 
  Snowflake, 
  Fan, 
  ChevronRight
} from 'lucide-react';
import styles from './ServicesDashboardSection.module.css';

const expertiseItems = [
  {
    id: "01",
    title: "AC Installation",
    path: "/services/ac-installation",
    desc: "Expert installation for all AC brands and models with precision engineering.",
    icon: <Settings size={32} />,
    img: "/HomeImages/AC installation in Bhopa.jpeg"
  },
  {
    id: "02",
    title: "AC Repair",
    path: "/services/ac-repair",
    desc: "Fast and reliable repair services to keep you cool year-round with original parts.",
    icon: <Wrench size={32} />,
    img: "/HomeImages/AC Repair.jpg"
  },
  {
    id: "03",
    title: "Ducting",
    path: "/services/ducting",
    desc: "Professional ductwork design and installation for optimal airflow and efficiency.",
    icon: <Wind size={32} />,
    img: "/HomeImages/Ducting.jpg"
  },
  {
    id: "04",
    title: "AMC's",
    path: "/services/annual-maintenance-contracts-hvac",
    desc: "Comprehensive annual maintenance to ensure peak performance and longevity.",
    icon: <ShieldCheck size={32} />,
    img: "/HomeImages/Ac Maintenance.jpg"
  },
  {
    id: "05",
    title: "Centralized AC",
    path: "/services/centralized-ac",
    desc: "Customized cooling solutions for large commercial and industrial complexes.",
    icon: <Snowflake size={32} />,
    img: "/HomeImages/Centralized Cooling.jpg"
  },
  {
    id: "06",
    title: "Exhaust Cleaning",
    path: "/services/commercial-restaurant-exhaust-cleaning",
    desc: "Specialized grease removal and hygiene cleaning for restaurant ventilation.",
    icon: <Fan size={32} />,
    img: "/HomeImages/Kitchen Exhaust.jpg"
  }
];

export default function ServicesDashboardSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.section} id="expertise">
      <div className={styles.container}>
        {/* Header Grid Row */}
        <div className={styles.headerRow}>
          <div className={styles.labelCol}>
            <motion.span 
              className={styles.howLabel}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              OUR EXPERTISE
            </motion.span>
          </div>
          
          <div className={styles.contentCol}>
            <motion.h2 
              className={styles.headerTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Comprehensive HVAC Solutions
            </motion.h2>
            <motion.p 
              className={styles.headerSub}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              From rapid repairs to full-scale installations, we provide tailored solutions for your comfort.
            </motion.p>
          </div>
        </div>

        {/* Cards Row */}
        <div className={styles.cardsRow}>
          <div className={styles.stepsContainer}>
            {expertiseItems.map((item, index) => {
              const isActive = activeIndex === index;
              const isOtherActive = activeIndex !== null && activeIndex !== index;
              
              return (
                <div
                  key={item.id}
                  className={`${styles.cardWrapper} ${isActive ? styles.active : ""} ${isOtherActive ? styles.faded : ""}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className={styles.cardInner}>
                    {/* Front Side */}
                    <div className={styles.cardFront}>
                      <div className={styles.imageOverlay} />
                      <img src={item.img} alt={item.title} className={styles.cardBgImage} />
                      
                      <div className={styles.frontContent}>
                        <div className={styles.iconBox}>
                          {item.icon}
                        </div>
                        <span className={styles.frontLabel}>{item.title}</span>
                      </div>
                      
                      <div className={styles.cardHint}>
                        <span>Click to explore</span>
                        <ChevronRight size={14} />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className={styles.cardBack}>
                      <div className={styles.backContent}>
                        <div className={styles.backIcon}>
                          {item.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDesc}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}