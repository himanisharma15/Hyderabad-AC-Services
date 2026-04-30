import { motion } from 'framer-motion';
import styles from './TrustedBrandsSection.module.css';

const brands = [
  {
    id: "voltas",
    jsx: (
      <svg width="180" height="40" viewBox="0 0 180 40">
        <text x="90" y="32" fill="#1565C0" fontSize="36" fontWeight="900" fontStyle="italic" fontFamily="sans-serif" textAnchor="middle" letterSpacing="-1">VOLTAS</text>
      </svg>
    ),
  },
  {
    id: "bluestar",
    jsx: (
      <svg width="180" height="40" viewBox="0 0 180 40">
        <rect x="10" y="2" width="36" height="36" fill="none" stroke="#1A237E" strokeWidth="2.5" />
        <path d="M28 8 L31 18 L41 18 L33 24 L36 34 L28 28 L20 34 L23 24 L15 18 L25 18 Z" fill="#1A237E" />
        <rect x="54" y="2" width="116" height="36" fill="#1A237E" />
        <text x="112" y="27" fill="white" fontSize="20" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">BLUE STAR</text>
      </svg>
    ),
  },
  {
    id: "carrier",
    jsx: (
      <svg width="180" height="60" viewBox="0 0 180 60">
        <ellipse cx="90" cy="30" rx="80" ry="26" fill="#250A59" />
        <ellipse cx="90" cy="30" rx="74" ry="20" fill="none" stroke="white" strokeWidth="1.5" />
        <text x="90" y="40" fill="white" fontSize="28" fontWeight="bold" fontStyle="italic" fontFamily="Georgia, serif" textAnchor="middle">Carrier</text>
      </svg>
    ),
  },
  {
    id: "daikin",
    jsx: (
      <svg width="180" height="50" viewBox="0 0 180 50">
        <polygon points="10,0 28,18 10,36" fill="black" />
        <polygon points="28,0 46,18 28,36" fill="#00A1E0" />
        <text x="56" y="25" fill="#00A1E0" fontSize="26" fontWeight="900" fontFamily="sans-serif">DAIKIN</text>
        <text x="56" y="38" fill="#666" fontSize="10" fontWeight="normal" fontFamily="sans-serif" letterSpacing="2">AIR CONDITIONING</text>
      </svg>
    ),
  },
];

export default function TrustedBrandsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Two-column body */}
        <div className={styles.body}>

          {/* LEFT — text + cards */}
          <div className={styles.leftColumn}>
            {/* Header Text */}
            <motion.div
              className={styles.header}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.label}>OUR PARTNERS</span>
              <h2 className={styles.title}>Trusted AC Brands We Work With</h2>
              <p className={styles.subtext}>
                We partner with leading air conditioning brands to deliver reliable,
                high-performance solutions for every space.
              </p>
            </motion.div>

            {/* 2×2 brand cards */}
            <div className={styles.logoGrid}>
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  className={styles.logoCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {brand.jsx}
                  <span className={styles.cardTitle}>{brand.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — ac-services image */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          >
            <img
              src="/HomeImages/ac-services.png"
              alt="AC Services"
              className={styles.serviceImage}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
