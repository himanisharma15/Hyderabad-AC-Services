import { motion } from 'framer-motion';
import styles from './HomeHero.module.css';

export default function HomeHero({ onBookNow }) {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <span>Premium HVAC Expertise</span>
        <h1>Comfort-Focused HVAC Care for Air Conditioning and Exhaust Systems</h1>
        <p>
          Streamlined, high-quality installation, repair, and maintenance services designed for homes,
          businesses, and commercial spaces.
        </p>

        <div className={styles.actions}>
          <a href="#air-conditioning">Explore Services</a>
          <button type="button" onClick={() => onBookNow('General HVAC Consultation')}>
            Book Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}
