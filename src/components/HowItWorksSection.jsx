import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Calendar, Wrench, CreditCard, CheckCircle } from 'lucide-react';
import styles from './HowItWorksSection.module.css';

const steps = [
  {
    id: "01",
    title: "Contact Us",
    desc: "Submit a quick request or call us. Our team is ready to listen.",
    icon: <PhoneCall size={36} />
  },
  {
    id: "02",
    title: "Pick a Time",
    desc: "Choose a convenient schedule. We work around your availability.",
    icon: <Calendar size={36} />
  },
  {
    id: "03",
    title: "Get a Service",
    desc: "Our expert visits your location to diagnose and fix the issue.",
    icon: <Wrench size={36} />
  },
  {
    id: "04",
    title: "Pay Safely",
    desc: "Transparent pricing with no hidden charges. Pay after service.",
    icon: <CreditCard size={36} />
  },
  {
    id: "05",
    title: "Ready!",
    desc: "Your AC is back to perfect cooling. Enjoy comfort again.",
    icon: <CheckCircle size={36} />
  }
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-animate logic
  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused && window.innerWidth > 900) {
          setActiveStep((prev) => (prev + 1) % steps.length);
        }
      }, 2000); // Faster switch
    };

    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleCardClick = (index) => {
    setActiveStep(index);
    // Reset timer on click
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused && window.innerWidth > 900) {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }
    }, 2500);
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

        {/* Cards Row - Aligned to Content Column */}
        <div 
          className={styles.cardsRow}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.cardsCol}>
            <div className={styles.stepsContainer}>
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <motion.div
                    key={step.id}
                    className={`${styles.card} ${isActive ? styles.active : ""}`}
                    onClick={() => handleCardClick(index)}
                    animate={{
                      flex: isActive ? 2.5 : 1,
                      opacity: isActive ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Background State */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          className={styles.activeBg}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
    
                    <div className={styles.cardInner}>
                      <span className={styles.stepNum}>{step.id}</span>
    
                      <div className={styles.iconContainer}>
                        <motion.div 
                          className={styles.iconBox}
                          animate={{ 
                            y: isActive ? -100 : 0,
                          }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                        >
                          {step.icon}
                        </motion.div>
                      </div>
    
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            className={styles.content}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                          >
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <p className={styles.cardDesc}>{step.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
