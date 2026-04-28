import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutPage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutPage({ onBookNow }) {
  return (
    <main className={styles.page}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBgSwoop}></div>
        <div className={styles.container}>
          <motion.div className={styles.heroLeft} initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeUp} className={styles.overline}>ABOUT US</motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Cooling Comfort,<br/>
              <span className={styles.textBlue}>Our Commitment.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroLead}>
              We are a professional AC service and installation company dedicated to delivering reliable, efficient and affordable cooling solutions for your home and office.
            </motion.p>
            
            <motion.div variants={fadeUp} className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <div className={styles.iconCircleLight}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                <span>Certified<br/>Technicians</span>
              </div>
              <div className={styles.heroFeature}>
                <div className={styles.iconCircleLight}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></div>
                <span>Genuine<br/>Parts</span>
              </div>
              <div className={styles.heroFeature}>
                <div className={styles.iconCircleLight}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                <span>Fast & On-Time<br/>Service</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.heroActions}>
              <button className={styles.btnPrimary} onClick={() => onBookNow && onBookNow('General HVAC Consultation')}>
                Book A Service &nbsp;&rarr;
              </button>
              <a href="tel:+919876543210" className={styles.btnOutline}>
                Call Now &nbsp;
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div className={styles.heroRight} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className={styles.heroImageWrapper}>
              <img src="/images /AC Installation.jpg" alt="Technician" />
              <div className={styles.floatCardLeft}>
                <div className={styles.iconSquareBlue}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg></div>
                <strong>100%</strong>
                <span>Satisfaction<br/>Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className={styles.whoWeAre}>
        <div className={styles.container}>
          <motion.div className={styles.whoLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
            <div className={styles.whoImageWrapper}>
              <div className={styles.whoImageBg}></div>
              <img src="/images /AC Repair & Fix.jpg" alt="AC Unit" />
              <div className={styles.floatCardBottomRight}>
                <div className={styles.iconCircleLightBlue}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
                <div className={styles.avatars}>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                  <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="User" />
                </div>
                <div className={styles.cardText}>
                  <strong>500+</strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.whoRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
            <motion.span variants={fadeUp} className={styles.overline}>WHO WE ARE</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Your Comfort Is<br/>
              <span className={styles.textBlue}>Our Priority</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionText}>
              We specialize in AC servicing, repairs, and home installations with a focus on safety, efficiency, and long-lasting performance. Whether it's a routine service or a new installation, we ensure a hassle-free experience with every visit.
            </motion.p>
            <motion.ul variants={staggerContainer} className={styles.checkList}>
              <motion.li variants={fadeUp}><div className={styles.checkCircle}><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></div> Expert Technicians</motion.li>
              <motion.li variants={fadeUp}><div className={styles.checkCircle}><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></div> Affordable Pricing</motion.li>
              <motion.li variants={fadeUp}><div className={styles.checkCircle}><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></div> Quality Workmanship</motion.li>
              <motion.li variants={fadeUp}><div className={styles.checkCircle}><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></div> Transparent & Honest Service</motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <motion.div className={styles.statsBar} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
              <div className={styles.statTextGroup}>
                <strong>500+</strong>
                <span>Happy Customers</span>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M19.6 9.4c.5-1.5.5-3-.1-4.2-.7-1.3-2-2.1-3.6-2.1-1.5 0-3 .8-3.7 2.1-.2.4-.6.6-1 .6h-.3c-.5 0-.9-.2-1-.6-.7-1.3-2.1-2.1-3.6-2.1-1.6 0-3 .8-3.7 2.1-.5 1.2-.5 2.7.1 4.2.4 1 .3 2.1-.2 3.1-.7 1.3-.7 2.8-.1 4 1 2.1 3.5 3.3 5.8 2.6l1.2-.4c.5-.2 1-.2 1.5 0l1.2.4c2.3.7 4.8-.5 5.8-2.6.5-1.2.5-2.7-.1-4-.5-1-.6-2.1-.2-3.1Z"></path></svg></div>
              <div className={styles.statTextGroup}>
                <strong>10+</strong>
                <span>Years of Experience</span>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
              <div className={styles.statTextGroup}>
                <strong>10K+</strong>
                <span>Services Completed</span>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
              <div className={styles.statTextGroup}>
                <strong>4.8</strong>
                <span>Customer Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Our Mission */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <motion.div className={styles.missionLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
            <motion.span variants={fadeUp} className={styles.overline}>OUR MISSION</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Our Mission is<br/>
              <span className={styles.textBlue}>Your Comfort</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionText}>
              At Hyderabad AC Services, our mission is simple — to provide reliable, affordable, and efficient cooling solutions that make every space more comfortable.
            </motion.p>
            <motion.p variants={fadeUp} className={styles.sectionText}>
              We are committed to delivering high-quality service with honesty, professionalism, and a customer-first approach.
            </motion.p>
          </motion.div>
          <motion.div className={styles.missionRight} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className={styles.missionImageWrapper}>
              <img src="/images /workflow.jpg" alt="Family Comfort" />
              <div className={styles.floatCardRight}>
                <div className={styles.iconCircleBlue}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
                <strong>Our Promise</strong>
                <span>Quality Service.<br/>Honest Pricing.<br/>Complete Satisfaction.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Additional Sections (Why Choose Us, Testimonials) formatted to match */}
      <section className={styles.extraSection}>
        <div className={styles.containerCol}>
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.overlineCenter}>WHY CHOOSE US</span>
            <h2 className={styles.sectionTitleCenter}>What Sets Us <span className={styles.textBlue}>Apart</span></h2>
          </div>
          <div className={styles.grid3}>
            <div className={styles.featureCard}>
              <div className={styles.iconSquareLightBlue}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
              <h3>Certified Experts</h3>
              <p>Highly trained technicians capable of handling any HVAC system.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconSquareLightBlue}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <h3>Fast Execution</h3>
              <p>Prompt arrivals, quick diagnostics, and swift resolution.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconSquareLightBlue}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
              <h3>Genuine Parts</h3>
              <p>We use only OEM replacement parts for long-lasting performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.extraSection}>
        <div className={styles.containerCol}>
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.overlineCenter}>TESTIMONIALS</span>
            <h2 className={styles.sectionTitleCenter}>What Our Clients <span className={styles.textBlue}>Say</span></h2>
          </div>
          <div className={styles.grid2}>
            <div className={styles.testiCard}>
              <div className={styles.testiStars}>★★★★★</div>
              <p>"Absolutely stellar service! The team arrived on time, diagnosed the issue within minutes, and had it running perfectly."</p>
              <div className={styles.testiAuthor}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                <div>
                  <h4>Rahul Sharma</h4>
                  <span>Restaurant Owner</span>
                </div>
              </div>
            </div>
            <div className={styles.testiCard}>
              <div className={styles.testiStars}>★★★★★</div>
              <p>"We hired them for complete ducting. Execution was flawless, and the cooling is perfectly balanced across all cabins."</p>
              <div className={styles.testiAuthor}>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                <div>
                  <h4>Priya Reddy</h4>
                  <span>Operations Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className={styles.ctaFooter}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaLeft}>
              <h2>Need AC Service Today?</h2>
              <p>We're just a call away. Let's keep you cool!</p>
              <ul className={styles.ctaList}>
                <li><div className={styles.checkCircleOutline}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div> Quick Response</li>
                <li><div className={styles.checkCircleOutline}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div> Expert Technicians</li>
                <li><div className={styles.checkCircleOutline}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div> Affordable Pricing</li>
              </ul>
            </div>
            <div className={styles.ctaMiddle}>
              <div className={styles.ctaActionCard}>
                <div className={styles.ctaActionIcon}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                <div>
                  <span className={styles.ctaLabel}>Call Now</span>
                  <strong className={styles.ctaValueBlue}>+91 98765 43210</strong>
                </div>
              </div>
              <div className={styles.ctaActionCardBlue} onClick={() => onBookNow && onBookNow('General HVAC Consultation')}>
                <div className={styles.ctaActionIconLight}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                <div>
                  <span className={styles.ctaLabelWhite}>Book Appointment</span>
                  <strong className={styles.ctaValueWhite}>Schedule a Service</strong>
                </div>
              </div>
            </div>
            <div className={styles.ctaRight}>
              <img src="/images /Preventive Maintenance.jpg" alt="Technician" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
