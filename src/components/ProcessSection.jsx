import { motion } from 'framer-motion';
import { processSteps } from '../data/processSteps';
import styles from './ProcessSection.module.css';

const headingVariants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -26 },
  show: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      delay: index * 0.02,
    },
  }),
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const connectorVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  show: (index) => ({
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.42,
      ease: 'easeOut',
      delay: 0.16 + index * 0.18,
    },
  }),
};

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.glowA} />
      <div className={styles.glowB} />

      <motion.div
        className={styles.header}
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.45 }}
      >
        <h2>How We Deliver Excellence</h2>
        <p>A simple, efficient workflow designed to provide fast and reliable AC solutions.</p>
      </motion.div>

      <div className={styles.workflowLayout}>
        <motion.div
          className={styles.timeline}
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              className={styles.step}
              custom={index}
              variants={stepVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.badgeWrap}>
                <motion.div
                  className={styles.badge}
                  variants={badgeVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {step.number}
                </motion.div>
                {index < processSteps.length - 1 ? (
                  <motion.span
                    className={styles.connector}
                    aria-hidden="true"
                    custom={index}
                    variants={connectorVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  />
                ) : null}
              </div>

              <div className={styles.card}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.figure
          className={styles.workflowImageWrap}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            className={styles.workflowImage}
            src="/images /Preventive Maintenance.jpg"
            alt="AC service workflow"
          />
        </motion.figure>
      </div>
    </section>
  );
}