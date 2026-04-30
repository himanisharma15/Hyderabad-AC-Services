import { motion } from 'framer-motion';
import styles from './HomeHero.module.css';

export default function HomeHero({ onBookNow }) {
  return (
    <section id="home" className={styles.hero}>
      {/* Background layer for subtle zoom effect */}
      <div className={styles.bgLayer} />
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Reliable AC Repair & Service When Comfort Can't Wait
        </motion.h1>
        
        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Same-day service. Certified technicians. 100% satisfaction guarantee.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <button 
            type="button" 
            className={styles.primaryBtn}
            onClick={() => onBookNow('General AC Inquiry')}
          >
            Book a Repair
          </button>
          
          <a 
            href="https://api.whatsapp.com/send/?phone=918712322475&text&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Get in Quote
          </a>
        </motion.div>

        <motion.div
          className={styles.trustStrip}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span>⭐ 4.9 Rated Service</span>
          <span className={styles.dot}>•</span>
          <span>5000+ Customers</span>
          <span className={styles.dot}>•</span>
          <span>Same-Day Service</span>
        </motion.div>
      </div>
    </section>
  );
}
