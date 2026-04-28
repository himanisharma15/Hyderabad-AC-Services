import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaBolt,
  FaFan,
  FaFireAlt,
  FaSnowflake,
  FaTools,
  FaWind,
} from 'react-icons/fa';
import styles from './ServiceCard.module.css';

const iconMap = {
  FaTools,
  FaSnowflake,
  FaFan,
  FaWind,
  FaFireAlt,
  FaBolt,
};

export default function ServiceCard({ service, onBookNow }) {
  const Icon = iconMap[service.icon] || FaSnowflake;

  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className={styles.mediaWrap}>
        <motion.img
          className={styles.image}
          src={service.image}
          alt={service.title}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
        <motion.div
          className={styles.iconBubble}
          whileHover={{ rotate: 8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Icon />
        </motion.div>
      </div>

      <div className={styles.body}>
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <motion.button
          className={styles.bookButton}
          type="button"
          aria-label={`Book ${service.title}`}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={() => onBookNow?.(service.title)}
        >
          Book Now
          <FaArrowRight />
        </motion.button>
      </div>
    </motion.article>
  );
}
