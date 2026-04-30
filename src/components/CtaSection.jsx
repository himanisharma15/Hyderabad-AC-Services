import { motion } from 'framer-motion';
import styles from './CtaSection.module.css';

export default function CtaSection({ onBookNow }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background Glows */}
          <div className={styles.glow1} />
          <div className={styles.glow2} />

          <div className={styles.content}>
            <motion.h2 
              className={styles.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Need AC Service Today? We’re Ready.
            </motion.h2>
            
            <motion.p 
              className={styles.subtext}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our certified technicians are available 24/7 to provide fast and reliable AC services in Hyderabad.
            </motion.p>

            <motion.div 
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                className={styles.primaryBtn}
                onClick={() => onBookNow('AC Service')}
              >
                Schedule Service
              </button>
              <a href="tel:+910000000000" className={styles.secondaryBtn}>
                Call Now
              </a>
            </motion.div>
          </div>

          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img 
              src="/home/navgurukul/.gemini/antigravity/brain/1aadf78e-501e-415a-a4d4-7aee3b5ddbf0/modern_ac_unit_cta_1777459275356.png" 
              alt="Modern AC Unit" 
              className={styles.acImage}
            />
            <div className={styles.imageOverlay} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
