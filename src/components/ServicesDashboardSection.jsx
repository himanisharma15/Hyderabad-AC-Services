import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Wrench,
  Settings,
  Wind,
  ShieldCheck,
  Snowflake,
  Fan,
  ChevronRight
} from "lucide-react";
import styles from "./ServicesDashboardSection.module.css";

const services = [
  {
    id: "installation",
    title: "AC Installation",
    path: "/services/ac-installation",
    pos: "top",
    icon: <Settings size={20} />,
    img: "/HomeImages/AC installation in Bhopa.jpeg",
    description: "Expert installation for all AC brands and models with precision.",
    lineCoords: { x1: "450", y1: "400", x2: "450", y2: "185" }
  },
  {
    id: "repair",
    title: "AC Repair",
    path: "/services/ac-repair",
    pos: "leftTop",
    icon: <Wrench size={20} />,
    img: "/HomeImages/AC Repair.jpg",
    description: "Fast and reliable repair services to keep you cool year-round.",
    lineCoords: { x1: "450", y1: "400", x2: "113", y2: "210" }
  },
  {
    id: "ducting",
    title: "Ducting",
    path: "/services/ducting",
    pos: "rightTop",
    icon: <Wind size={20} />,
    img: "/HomeImages/Ducting.jpg",
    description: "Professional ductwork design and installation for optimal airflow.",
    lineCoords: { x1: "450", y1: "400", x2: "788", y2: "210" }
  },
  {
    id: "maintenance",
    title: "AMC's",
    path: "/services/annual-maintenance-contracts-hvac",
    pos: "leftBottom",
    icon: <ShieldCheck size={20} />,
    img: "/HomeImages/Ac Maintenance.jpg",
    description: "Regular checkups and cleaning to ensure peak performance.",
    lineCoords: { x1: "450", y1: "400", x2: "113", y2: "590" }
  },
  {
    id: "centralized",
    title: "Centralized Air Conditioning",
    path: "/services/centralized-ac",
    pos: "rightBottom",
    icon: <Snowflake size={20} />,
    img: "/HomeImages/Centralized Cooling.jpg",
    description: "Customized solutions for large commercial and residential spaces.",
    lineCoords: { x1: "450", y1: "400", x2: "788", y2: "590" }
  },
  {
    id: "exhaust",
    title: "Restaurant Exhaust Cleaning",
    path: "/services/commercial-restaurant-exhaust-cleaning",
    pos: "bottom",
    icon: <Fan size={20} />,
    img: "/HomeImages/Kitchen Exhaust.jpg",
    description: "Efficient ventilation solutions for commercial and residential kitchens.",
    lineCoords: { x1: "450", y1: "400", x2: "450", y2: "615" }
  },
];

export default function ServicesDashboardSection({ onBookNow }) {
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <section className={styles.section}>
      <div className={styles.shapeDivider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" className={styles.shapeFill}></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.headerRow}>
          <div className={styles.labelCol}>
            <motion.span 
              className={styles.howLabel}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              OUR EXPERTISE
            </motion.span>
          </div>
          
          <div className={styles.contentCol}>
            <motion.h2 
              className={styles.headerTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Comprehensive HVAC Solutions
            </motion.h2>
            <motion.p 
              className={styles.headerSub}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              From rapid repairs to full-scale installations, we provide tailored solutions for your comfort.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.container}
      >
        {/* SVG LINES */}
        <svg
          className={styles.lines}
          viewBox="0 0 900 800"
          preserveAspectRatio="none"
        >
          {services.map((service) => (
            <motion.line
              key={service.id}
              x1={service.lineCoords.x1}
              y1={service.lineCoords.y1}
              x2={service.lineCoords.x2}
              y2={service.lineCoords.y2}
              className={`${styles.line} ${hoveredService === service.id ? styles.activeLine : ""}`}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              animate={hoveredService === service.id ? { opacity: 1, strokeWidth: 2 } : { opacity: 0.4, strokeWidth: 1 }}
            />
          ))}
          
          {/* VERTICAL AXIS POINTERS */}
          <motion.line 
            x1="450" y1="0" x2="450" y2="10" 
            className={styles.pointerLine}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
          />
          <motion.line 
            x1="450" y1="790" x2="450" y2="800" 
            className={styles.pointerLine}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
          />
        </svg>

        {/* CENTER HUB */}
        <div className={styles.center}>
          <AnimatePresence mode="wait">
            {hoveredService ? (
              <motion.div
                key={hoveredService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={styles.hubContent}
              >
                <h2 className={styles.hubTitle}>
                  {services.find(s => s.id === hoveredService).title}
                </h2>
                <p className={styles.hubDesc}>
                  {services.find(s => s.id === hoveredService).description}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.hubContent}
              >
                <h1>Our Services</h1>
                <p>Expert HVAC Solutions</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CARDS */}
        {services.map((item, i) => (
          <motion.div
            key={item.id}
            className={`${styles.card} ${styles[item.pos]}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ cursor: 'pointer' }}
            onClick={() => handleCardClick(item.path)}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.12)",
              zIndex: 10
            }}
            onMouseEnter={() => setHoveredService(item.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className={styles.imageWrapper}>
              <img className={styles.image} src={item.img} alt={item.title} />
              <div className={styles.iconBadge}>{item.icon}</div>
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardTitle}>{item.title}</span>
              <div className={styles.cardAction}>
                <span>Learn More</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
}