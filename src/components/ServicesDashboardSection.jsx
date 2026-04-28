import { motion } from 'framer-motion';
import styles from './ServicesDashboardSection.module.css';

const services = [
  {
    title: 'Air Conditioning',
    description: 'Cooling, installation, repair, and maintenance services for homes and businesses.',
    href: '#air-conditioning',
    accent: 'Cooling comfort made reliable.',
  },
  {
    title: 'Exhaust',
    description: 'Professional exhaust, ventilation, and airflow solutions for clean, efficient spaces.',
    href: '#exhaust',
    accent: 'Smart airflow for modern spaces.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ServicesDashboardSection() {
  return (
    <motion.section
      id="services-overview"
      className={styles.section}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.header}>
        <span className={styles.kicker}>Dashboard Services</span>
        <h2>Our Services</h2>
        <p>Choose between our two core HVAC service pillars: Air Conditioning and Exhaust.</p>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <motion.article
            key={service.title}
            className={styles.card}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className={styles.cardTop}>
              <span>{service.title}</span>
              <strong>{service.accent}</strong>
            </div>

            <p>{service.description}</p>

            <a className={styles.linkButton} href={service.href}>
              Explore {service.title}
            </a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
