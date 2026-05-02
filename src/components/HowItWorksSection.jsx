import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Calendar, Wrench, CreditCard, CheckCircle } from 'lucide-react';
import styles from './HowItWorksSection.module.css';

const steps = [
  {
    id: "01",
    title: "Contact Us",
    desc: "Submit a quick request or call us. Our team is ready to listen.",
    icon: <PhoneCall size={32} />
  },
  {
    id: "02",
    title: "Pick a Time",
    desc: "Choose a convenient schedule. We work around your availability.",
    icon: <Calendar size={32} />
  },
  {
    id: "03",
    title: "Get a Service",
    desc: "Our expert visits your location to diagnose and fix the issue.",
    icon: <Wrench size={32} />
  },
  {
    id: "04",
    title: "Pay Safely",
    desc: "Transparent pricing with no hidden charges. Pay after service.",
    icon: <CreditCard size={32} />
  },
  {
    id: "05",
    title: "Ready!",
    desc: "Your AC is back to perfect cooling. Enjoy comfort again.",
    icon: <CheckCircle size={32} />
  }
];

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.section}>
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
              HOW IT WORKS
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
              From Call To Cool In 5 Steps
            </motion.h2>
            <motion.p 
              className={styles.headerSub}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Getting your AC back on track is easier than you think — just five simple steps.
            </motion.p>
          </div>
        </div>

        {/* Cards Row */}
        <div className={styles.cardsRow}>
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              const isOtherActive = activeIndex !== null && activeIndex !== index;
              
              return (
                <div
                  key={step.id}
                  className={`${styles.cardWrapper} ${isActive ? styles.active : ""} ${isOtherActive ? styles.faded : ""}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className={styles.cardInner}>
                    {/* Front Side */}
                    <div className={styles.cardFront}>
                      <span className={styles.stepNum}>{step.id}</span>
                      <div className={styles.iconBox}>
                        {step.icon}
                      </div>
                      <span className={styles.frontLabel}>{step.title}</span>
                    </div>

                    {/* Back Side */}
                    <div className={styles.cardBack}>
                      <div className={styles.backContent}>
                        <div className={styles.backIcon}>
                          {step.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{step.title}</h3>
                        <p className={styles.cardDesc}>{step.desc}</p>
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
