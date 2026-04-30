import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Zap, 
  Smile, 
  Star, 
  MapPin, 
  IndianRupee 
} from 'lucide-react';
import styles from './WhyChooseUsSection.module.css';

const features = [
  {
    title: "Certified & Experienced Technicians",
    desc: "Highly trained professionals with hands-on expertise.",
    icon: <Users size={22} />
  },
  {
    title: "Same-Day Service",
    desc: "Quick response and fast repairs to minimize downtime.",
    icon: <Zap size={22} />
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden charges. Clear estimates before work begins.",
    icon: <IndianRupee size={22} />
  },
  {
    title: "5000+ Happy Customers",
    desc: "Trusted by thousands of residential and commercial clients.",
    icon: <Smile size={22} />
  },
  {
    title: "4.9 Rated Service",
    desc: "Top-rated service with consistent satisfaction.",
    icon: <Star size={22} />
  },
  {
    title: "Service Across Hyderabad",
    desc: "Wide coverage across all major areas with fast availability.",
    icon: <MapPin size={22} />
  }
];

export default function WhyChooseUsSection() {
  const [active, setActive] = useState(0);

  return (
    <motion.section 
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Left Side: Content */}
          <div className={styles.leftContent}>
            <motion.div 
              className={styles.header}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className={styles.title}>Why Homeowners & Businesses Choose Us</h2>
              <p className={styles.subtitle}>
                Trusted AC service experts delivering quality, reliability, and fast response across Hyderabad.
              </p>
            </motion.div>

            <motion.div 
              className={styles.cardGrid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {features.map((item, i) => (
                <motion.div 
                  key={i}
                  className={`${styles.card} ${active === i ? styles.active : ""}`}
                  onMouseEnter={() => setActive(i)}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                >
                  <div className={styles.iconWrapper}>
                    {item.icon}
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div 
            className={styles.rightImage}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/HomeImages/Expert AC Technician.jpeg"
                alt="Expert AC Technician" 
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
