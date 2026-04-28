import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function ServicesSection({ onBookNow }) {

  const handleHeaderVideoTimeUpdate = (event) => {
    const video = event.currentTarget;
    if (video.currentTime >= 15) {
      video.currentTime = 0;
      video.play();
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.glowA} />
      <div className={styles.glowB} />

      <motion.div
        className={styles.header}
        initial="hidden"
        animate="show"
        variants={itemVariants}
      >
        <video
          className={styles.headerVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          onTimeUpdate={handleHeaderVideoTimeUpdate}
        >
          <source src="/images /Ac repair .mp4" type="video/mp4" />
        </video>
        <div className={styles.headerOverlay} aria-hidden="true" />

        <div className={styles.headerContent}>
          <span className={styles.kicker}>Premium HVAC Care</span>
          <h2>Engineered Cooling. Delivered with Excellence.</h2>
          <p>Advanced AC solutions crafted for comfort, efficiency, and reliability.</p>
        </div>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={itemVariants}>
            <ServiceCard service={service} onBookNow={onBookNow} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
