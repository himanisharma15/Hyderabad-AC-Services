import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, Truck, Banknote, Package, PhoneCall, Calculator, 
  CheckCircle, ChevronDown, Home, Building2, Factory, 
  Hotel, Recycle, Wrench, ArrowRight, Phone 
} from 'lucide-react';
import './ACScrapSection.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ACScrapSection({ onBookNow }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="scrap-page">
      
      {/* 1. HERO SECTION */}
      <section className="scrap-hero">
        <motion.div 
          className="scrap-hero-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="scrap-hero-content" variants={fadeUp}>
            <div className="scrap-eyebrow">
              <Leaf size={16} />
              <span>Eco-Friendly Disposal</span>
            </div>
            <h1 className="scrap-hero-heading">AC Scrap Dealer <br /><span>in Hyderabad</span></h1>
            <p className="scrap-hero-desc">
              Upgrade your cooling efficiently. We buy non-functional, obsolete, and old air conditioners for top market value with free doorstep uninstallation and pickup.
            </p>
            
            <div className="scrap-hero-actions">
              <button 
                onClick={() => onBookNow('AC Scrap Quotation')}
                className="scrap-btn"
              >
                Get Instant Quote <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </button>
              <div className="scrap-call-link">
                <Phone size={18} />
                <a href="tel:+918712322475">+91 87123 22475</a>
              </div>
            </div>

            <div className="scrap-hero-trust">
              <div className="scrap-trust-item">
                <CheckCircle size={16} />
                <span>Best Scrap Rates</span>
              </div>
              <div className="scrap-trust-item">
                <CheckCircle size={16} />
                <span>Free Doorstep Pickup</span>
              </div>
              <div className="scrap-trust-item">
                <CheckCircle size={16} />
                <span>Instant Cash Payment</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="scrap-graphic-wrapper" variants={fadeUp}>
            <div className="scrap-hero-image-wrapper">
              <img src="/images/ac_scrap_hero.png" alt="AC Recycling" className="scrap-hero-image" />
              <div className="scrap-image-badge">
                <Recycle size={20} />
                <span>Eco-Recyclers</span>
              </div>
              
              <motion.div 
                className="scrap-floating-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="scrap-float-icon"><Banknote size={20} /></div>
                <div>
                  <strong>Best Pricing</strong>
                  <p>Spot cash payment</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SERVICES (CARD GRID) */}
      <section className="scrap-services">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="scrap-section-title">Why Sell To Us?</h2>
          <p className="scrap-section-desc">We offer a seamless, profitable, and eco-friendly way to dispose of your old AC units.</p>
        </motion.div>
        
        <motion.div 
          className="scrap-offer-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { title: "Any AC Type",     desc: "We buy window, split, cassette, and large centralized chillers.", icon: <Package  size={32} /> },
            { title: "Free Uninstallation", desc: "Our technicians handle the removal safely without damaging your walls.",  icon: <Wrench    size={32} /> },
            { title: "Spot Payment",       desc: "Get paid instantly via Cash, UPI, or Bank Transfer upon pickup.",        icon: <Banknote size={32} /> },
            { title: "Eco Disposal",desc: "We ensure 100% eco-friendly recycling and safe gas recovery.",        icon: <Leaf     size={32} /> },
            { title: "Bulk Solutions",       desc: "Custom removal plans for corporate offices and industrial sites.",    icon: <Building2 size={32} /> },
            { title: "Fair Valuation",      desc: "Prices based on current copper and metal market rates.",             icon: <Calculator size={32} /> }
          ].map((offer, idx) => (
            <motion.div className="scrap-simple-card" variants={fadeUp} key={idx}>
              <div className="scrap-card-icon">{offer.icon}</div>
              <h3 className="scrap-card-title">{offer.title}</h3>
              <p className="scrap-card-desc">{offer.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. WHO CAN SELL (SMALL CARDS) */}
      <section className="scrap-who">
        <motion.h2 
          className="scrap-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          We Buy From
        </motion.h2>
        
        <motion.div 
          className="who-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { title: "Residential", icon: <Home size={32} /> },
            { title: "IT Parks & Offices", icon: <Building2 size={32} /> },
            { title: "Industries", icon: <Factory size={32} /> },
            { title: "Hospitals & Hotels", icon: <Hotel size={32} /> }
          ].map((who, idx) => (
            <motion.div className="who-card" variants={fadeUp} key={idx}>
              <div className="who-icon">{who.icon}</div>
              <h4>{who.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. HOW IT WORKS (WORKFLOW) */}
      <section className="scrap-workflow">
        <motion.h2 
          className="scrap-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Simple Process
        </motion.h2>
        
        <motion.div 
          className="scrap-workflow-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="scrap-step-line"></div>
          {[
            { step: "Send Request", icon: <PhoneCall size={32} /> },
            { step: "Get Evaluation", icon: <Calculator size={32} /> },
            { step: "Free Removal", icon: <Truck size={32} /> },
            { step: "Instant Payment", icon: <Banknote size={32} /> }
          ].map((item, idx) => (
            <motion.div className="scrap-step" variants={fadeUp} key={idx}>
              <div className="scrap-step-icon">{item.icon}</div>
              <span>{idx + 1}. {item.step}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. WHY CHOOSE US (HIGHLIGHTS) */}
      <section className="scrap-why">
        <motion.div 
          className="scrap-trust-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            "Best Price Guaranteed",
            "Professional Team",
            "Zero Removal Fees",
            "Eco-Safe Recycling",
            "Immediate Payouts"
          ].map((item, idx) => (
            <motion.div className="scrap-trust-card" variants={fadeUp} key={idx}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="scrap-faq">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="scrap-section-title">Common Questions</h2>
        </motion.div>
        
        <motion.div 
          className="scrap-faq-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { q: "Is uninstallation really free?", a: "Yes, our team handles the entire uninstallation and removal process at no extra cost to you." },
            { q: "How do you determine the price?", a: "We calculate the price based on tonnage, AC type (Window/Split), and current metal market value (copper/aluminum)." },
            { q: "Do you buy non-working units?", a: "Absolutely. We buy ACs in any condition—dead, damaged, or completely non-functional." },
            { q: "Do you handle bulk removals?", a: "Yes, we specialize in bulk AC scrap removal from commercial buildings, hospitals, and IT companies." }
          ].map((faq, idx) => (
            <motion.div 
              className={`s-faq-item ${activeFaq === idx ? 'active' : ''}`} 
              key={idx}
              variants={fadeUp}
            >
              <button className="s-faq-question" onClick={() => toggleFaq(idx)}>
                {faq.q}
                <ChevronDown className={`s-faq-icon ${activeFaq === idx ? 'rotate' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div 
                    className="s-faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}


