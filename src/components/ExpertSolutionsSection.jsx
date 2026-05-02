import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Clock, Wrench, Settings } from 'lucide-react';
import styles from './ExpertSolutionsSection.module.css';
import technicianImg from '../assets/technician_expert.jpg';

const services = [
  { title: "Indoor Air Quality Check", icon: <CheckCircle2 size={18} /> },
  { title: "Emergency AC Repair", icon: <Zap size={18} /> },
  { title: "Preventive Maintenance", icon: <ShieldCheck size={18} /> },
  { title: "AC Installation & Replacement", icon: <Wrench size={18} /> },
  { title: "AMC (Annual Maintenance Contracts)", icon: <Clock size={18} /> }
];

export default function ExpertSolutionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.left}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className={styles.heading}>Expert AC Solutions You Can Trust</h2>
              <p className={styles.subheading}>
                Reliable, efficient, and professional air conditioning services tailored for homes and businesses in Hyderabad.
              </p>
            </motion.div>

            <motion.div 
              className={styles.highlightCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className={styles.cardHeader}>
                <Settings className={styles.settingsIcon} size={20} />
                <h3>Complete AC Repair & Servicing</h3>
              </div>
              <p>
                We diagnose and fix cooling issues, gas leakage, airflow problems, and electrical faults quickly.
              </p>
            </motion.div>

            <motion.ul 
              className={styles.serviceList}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {services.map((item, index) => (
                <motion.li 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    show: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <span className={styles.iconWrapper}>{item.icon}</span>
                  <div className={styles.listText}>
                    <h4>{item.title}</h4>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Image */}
          <motion.div 
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src={technicianImg} 
                alt="AC Technician working" 
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
