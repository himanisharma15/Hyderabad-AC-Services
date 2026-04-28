import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import styles from './ServiceCategorySection.module.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: 'easeOut' },
  },
};

export default function ServiceCategorySection({ id, title, subtitle, services, onBookNow, alt = false }) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${alt ? styles.sectionAlt : ''}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <motion.div className={styles.grid} variants={gridVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
        {services.map((service) => (
          <motion.div
            key={service.title}
            id={service.id}
            className={service.id ? styles.serviceAnchor : ''}
            variants={cardVariants}
          >
            <ServiceCard service={service} onBookNow={onBookNow} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
