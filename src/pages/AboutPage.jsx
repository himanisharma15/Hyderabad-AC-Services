import styles from './AboutPage.module.css';
import { 
  FaPhoneAlt, FaSnowflake, FaArrowRight, FaMapMarkerAlt, 
  FaTools, FaClock, FaShieldAlt, FaUsers, FaCheckCircle, 
  FaAward, FaClipboardList, FaStar, FaBullseye
} from 'react-icons/fa';
import acTechnicianHero from '../assets/ac_technician_hero.png?v=2';
import acInstallIndoor from '../assets/ac_install_indoor.png';
import acCheckOutdoor from '../assets/ac_check_outdoor.png';
import familyAcComfort from '../assets/family_ac_comfort.png';
import project1 from '../assets/project_1_ac_home.png';
import project2 from '../assets/project_2_kitchen_hood.png';
import project3 from '../assets/project_3_office_ducts.png';
import project4 from '../assets/project_4_smart_home.png';
import avatarJerome from '../assets/avatar_jerome.png';
import avatarEleanor from '../assets/avatar_eleanor.png';
import avatarRobert from '../assets/avatar_robert.png';
import whyChooseBg from '../assets/why_choose_bg.png';
import trustedPartner from '../assets/trusted_partner.png';
import { motion } from 'framer-motion';
import { FaHandshake, FaDollarSign } from 'react-icons/fa';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutPage({ onBookNow }) {
  const navigateTo = (pathname) => {
    if (window.location.pathname !== pathname) {
      window.history.pushState({}, '', pathname);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <motion.section className={styles.hero} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <FaSnowflake className={styles.badgeIcon} />
              <span>Expert Heating & Cooling Specialists</span>
            </div>
            <h1 className={styles.title}>
              Expert Air Conditioning &<br />
              Heating Repair Services
            </h1>
            <p className={styles.description}>
              From scorching summer days to unexpected breakdowns, Hyderabad AC Services is your trusted partner for commercial and residential cooling. We deliver fast, affordable, and energy-efficient HVAC solutions across Hyderabad to ensure you stay comfortable year-round.
            </p>
            <div className={styles.actions}>
              <button className={styles.scheduleBtn} onClick={() => onBookNow('General HVAC Consultation')}>
                Schedule Now <FaArrowRight className={styles.btnIcon} />
              </button>
              <a href="tel:+918712322475" className={styles.phoneBlock} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={styles.phoneIconWrapper}>
                  <FaPhoneAlt className={styles.phoneIcon} />
                </div>
                <div className={styles.phoneText}>
                  <span className={styles.phoneLabel}>Call Us Now</span>
                  <span className={styles.phoneNumber}>+91 87123 22475</span>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src={acTechnicianHero} alt="AC Technician" />
          </div>
        </div>
      </motion.section>
      
      {/* --- Section 1: Cooling Comfort --- */}
      <motion.section className={styles.comfortSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>
        <div className={styles.container}>
          <div className={styles.contentLeft}>
            <span className={styles.subTag}>ABOUT US</span>
            <h2 className={styles.sectionTitle}>
              Cooling Comfort,<br />
              <span className={styles.textBlue}>Our Commitment.</span>
            </h2>
            <p className={styles.sectionDesc}>
              At Hyderabad AC Services, we provide complete Air Conditioning and HVAC Services in Hyderabad. With years of experience, we specialize in AC installation, repair, maintenance, ducting, centralized cooling, restaurant kitchen exhaust installation, and annual maintenance for both residential and commercial clients.
            </p>
            <p className={styles.sectionDesc}>
              Our mission is simple: to keep all our customers cool and comfortable with reliable, affordable, and professional AC Services.
            </p>
            <motion.div className={styles.featuresRow} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
               <motion.div className={styles.featureItem} variants={fadeUpItem}>
                 <div className={styles.featureIconWrap}><FaMapMarkerAlt /></div>
                 <span>Certified<br/>Technicians</span>
               </motion.div>
               <motion.div className={styles.featureItem} variants={fadeUpItem}>
                 <div className={styles.featureIconWrap}><FaTools /></div>
                 <span>Genuine<br/>Parts</span>
               </motion.div>
               <motion.div className={styles.featureItem} variants={fadeUpItem}>
                 <div className={styles.featureIconWrap}><FaClock /></div>
                 <span>Fast & On-Time<br/>Service</span>
               </motion.div>
            </motion.div>
            <div className={styles.btnRow}>
               <button className={styles.primaryBtn} onClick={() => { if(onBookNow) onBookNow('AC Service'); }}>
                 Book A Service <FaArrowRight />
               </button>
               <button className={styles.outlineBtn} onClick={() => window.location.href='tel:+918712322475'}>
                 Call Now <FaPhoneAlt />
               </button>
            </div>
          </div>
          <div className={styles.imageRight}>
            <div className={styles.imgWrapper}>
               <img src={acInstallIndoor} alt="AC Install" className={`${styles.roundedImg} ${styles.curvedImgLeftHero}`} />
               <div className={styles.floatingCardLeft}>
                 <div className={styles.shieldIcon}><FaShieldAlt /></div>
                 <div className={styles.floatingText}>
                   <strong>100%</strong>
                   <span>Satisfaction<br/>Guaranteed</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- Section 2: WHO WE ARE --- */}
      <motion.section className={styles.whoWeAreSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>
        <div className={styles.container}>
           <div className={styles.imageLeft}>
              <div className={styles.imgWrapper}>
                 <img src={acCheckOutdoor} alt="Outdoor AC Check" className={styles.roundedImg} />
                 <div className={styles.floatingCardBottom}>
                    <div className={styles.avatarGroup}>
                      <FaUsers className={styles.usersIcon} />
                    </div>
                    <div className={styles.floatingText}>
                       <strong>500+</strong>
                       <span>Happy Customers</span>
                    </div>
                 </div>
              </div>
           </div>
           <div className={styles.contentRight}>
              <span className={styles.subTag}>WHO WE ARE</span>
              <h2 className={styles.sectionTitle}>
                Your Comfort Is<br />
                <span className={styles.textBlue}>Our Priority</span>
              </h2>
              <p className={styles.sectionDesc}>
                Hyderabad AC Services is a team of certified HVAC engineers and professionals dedicated to delivering top-quality cooling solutions. From split and window ACs to centralized ducting and VRF/VRV systems, we provide end-to-end services tailored to your specific needs. Whether it’s a home, office, restaurant, hospital, retail showroom, or industrial facility, we ensure every project is executed with precision, safety, and efficiency.
              </p>
              <ul className={styles.checkList}>
                 <li><FaCheckCircle className={styles.checkIcon}/> Experienced Engineers & Certified Technicians</li>
                 <li><FaCheckCircle className={styles.checkIcon}/> Serving all areas of Hyderabad</li>
                 <li><FaCheckCircle className={styles.checkIcon}/> Transparent pricing – no hidden charges</li>
                 <li><FaCheckCircle className={styles.checkIcon}/> Fast response & same-day service available</li>
                 <li><FaCheckCircle className={styles.checkIcon}/> Eco-friendly practices & responsible recycling</li>
                 <li><FaCheckCircle className={styles.checkIcon}/> Customer satisfaction guaranteed</li>
              </ul>
              <p className={styles.sectionDesc} style={{marginTop: '20px'}}>
                Whether you're installing a new system, upgrading to centralized cooling, or just need seasonal maintenance—we’re here to keep you cool, comfortable, and worry-free.
              </p>
           </div>
        </div>
      </motion.section>

      {/* --- Section 6: OUR MISSION --- */}
      <motion.section className={styles.missionSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>
        <div className={styles.container}>
          <div className={styles.contentLeft}>
            <span className={styles.subTag}>OUR MISSION</span>
            <h2 className={styles.sectionTitle}>
              Our Mission is<br />
              <span className={styles.textBlue}>Your Comfort</span>
            </h2>
            <p className={styles.sectionDesc}>
              At Hyderabad AC Services, our mission is simple — to provide reliable, affordable, and efficient cooling solutions that make every space more comfortable.
            </p>
            <p className={styles.sectionDesc}>
              We are committed to delivering high-quality service with honesty, professionalism, and a customer-first approach.
            </p>
          </div>
          <div className={styles.imageRight}>
             <div className={`${styles.imgWrapper} ${styles.missionImgWrap}`}>
               <div className={styles.greyBackdrop}></div>
               <img src={familyAcComfort} alt="Family Comfort" className={styles.roundedImg} />
               <div className={styles.floatingCardRight}>
                 <div className={styles.targetIconWrapper}>
                   <FaBullseye className={styles.targetIcon} />
                 </div>
                 <div className={styles.floatingText}>
                   <strong>Our Promise</strong>
                   <span style={{fontSize: '0.9rem', lineHeight: '1.5'}}>Quality Service.<br/>Honest Pricing.<br/>Complete Satisfaction.</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </motion.section>

      {/* --- Section 3: Blue Stats Banner --- */}
      <motion.section className={styles.statsBannerWrapper} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>
        <div className={styles.statsBanner}>
          <motion.div className={styles.statsContainer} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
             <motion.div className={styles.statItem} variants={fadeUpItem}>
               <FaUsers className={styles.statIcon} />
               <div className={styles.statText}>
                 <strong>500+</strong>
                 <span>Happy Customers</span>
               </div>
             </motion.div>
             <div className={styles.divider}></div>
             <motion.div className={styles.statItem} variants={fadeUpItem}>
               <FaAward className={styles.statIcon} />
               <div className={styles.statText}>
                 <strong>10+</strong>
                 <span>Years of Experience</span>
               </div>
             </motion.div>
             <div className={styles.divider}></div>
             <motion.div className={styles.statItem} variants={fadeUpItem}>
               <FaClipboardList className={styles.statIcon} />
               <div className={styles.statText}>
                 <strong>10K+</strong>
                 <span>Services Completed</span>
               </div>
             </motion.div>
             <div className={styles.divider}></div>
             <motion.div className={styles.statItem} variants={fadeUpItem}>
               <FaStar className={styles.statIcon} style={{ color: '#FBBF24' }} />
               <div className={styles.statText}>
                 <strong>4.8/5</strong>
                 <span>Customer Rating</span>
               </div>
             </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 6: WHY CHOOSE US --- */}
      <motion.section className={styles.whyChooseSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>
        <div className={styles.whyChooseContainer}>
          <div className={styles.whyChooseLeft}>
            <div className={styles.whyChooseBgOverlay}></div>
            <img src={whyChooseBg} alt="AC Background" className={styles.whyChooseBgImg} />
            <div className={styles.whyChooseContent}>
              <div className={styles.badgeGlass}>
                <FaSnowflake className={styles.badgeIconGlass} />
                <span>Why Choose Us</span>
              </div>
              <h2 className={styles.whyChooseTitle}>
                Quality Service That<br />Speaks for Itself
              </h2>
              <p className={styles.whyChooseDesc}>
                At Hyderabad AC Services, we believe that world-class cooling solutions shouldn't come with a premium price tag. Our team is dedicated to providing efficient, long-lasting repairs and installations backed by a relentless commitment to customer satisfaction.
              </p>
              
              <div className={styles.trustedBox}>
                <img src={trustedPartner} alt="Trusted Partner" className={styles.trustedImg} />
                <div className={styles.trustedBadge}>
                  <div className={styles.handshakeIcon}><FaHandshake /></div>
                  <strong>Trusted By 500+ Partner</strong>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div className={styles.whyChooseRight} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div className={`${styles.whyCard} ${styles.whyCardTeal}`} variants={fadeUpItem}>
              <div className={`${styles.whyIcon} ${styles.whyIconTeal}`}>
                <FaAward />
              </div>
              <div className={styles.whyCardBody}>
                <h4>Licensed Insured Technicians</h4>
                <p>Our team consists of highly vetted, certified professionals who undergo continuous training to handle the latest HVAC technologies safely and efficiently.</p>
              </div>
            </motion.div>

            <motion.div className={`${styles.whyCard} ${styles.whyCardWhite}`} variants={fadeUpItem}>
              <div className={`${styles.whyIcon} ${styles.whyIconWhite}`}>
                <FaDollarSign />
              </div>
              <div className={styles.whyCardBody}>
                <h4>Transparent Fair Pricing</h4>
                <p>No hidden fees or surprise charges. We provide upfront, comprehensive quotes before any work begins, ensuring you get the best value for your investment.</p>
              </div>
            </motion.div>

            <motion.div className={`${styles.whyCard} ${styles.whyCardWhite}`} variants={fadeUpItem}>
              <div className={`${styles.whyIcon} ${styles.whyIconWhite}`}>
                <FaShieldAlt />
              </div>
              <div className={styles.whyCardBody}>
                <h4>100% Satisfaction Guarantee</h4>
                <p>We stand by the quality of our workmanship. If you aren't completely thrilled with your service, we will return and make it right at no extra cost.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 5: OUR PROJECTS --- */}
      <motion.section className={styles.projectsSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsHeader}>
             <div className={styles.projectsHeaderLeft}>
               <div className={styles.badgeSolid}>
                 <FaSnowflake className={styles.badgeIconSolid} />
                 <span>Our Projects</span>
               </div>
               <h2 className={styles.sectionTitle}>
                 See Our Professional HVAC<br />
                 Work in Action
               </h2>
             </div>
             <div className={styles.projectsHeaderRight}>
               <p className={styles.sectionDesc}>
                 Take a look at some of our recent installations and repairs. From small residential setups to massive commercial ducting, we bring the same level of dedication and expertise to every job.
               </p>
             </div>
          </div>
          
          <motion.div className={styles.projectsGrid} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div className={styles.projectCard} variants={fadeUpItem}>
              <img src={project1} alt="3-Bedroom Home AC Installation" className={styles.projectImg} />
              <div className={styles.projectCardContent}>
                <h3>3-Bedroom Home AC Installation</h3>
                <p>Complete split AC installation for a modern villa, optimizing airflow and energy efficiency in every room.</p>
                <button className={styles.projectIconBtn} onClick={() => navigateTo('/services')}><FaArrowRight className={styles.rotateIcon} /></button>
              </div>
            </motion.div>
            
            <motion.div className={styles.projectCard} variants={fadeUpItem}>
              <img src={project2} alt="Restaurant Kitchen Ventilation" className={styles.projectImg} />
              <div className={styles.projectCardContent}>
                <h3>Restaurant Kitchen Ventilation</h3>
                <p>Heavy-duty exhaust and ventilation setup ensuring a smoke-free and cool environment for kitchen staff.</p>
                <button className={styles.projectIconBtn} onClick={() => navigateTo('/services')}><FaArrowRight className={styles.rotateIcon} /></button>
              </div>
            </motion.div>

            <motion.div className={styles.projectCard} variants={fadeUpItem}>
              <img src={project3} alt="Office Building HVAC Upgrade" className={styles.projectImg} />
              <div className={styles.projectCardContent}>
                <h3>Office Building HVAC Upgrade</h3>
                <p>Centralized cooling system overhaul for a 3-story corporate office, improving air quality and reducing energy costs by 20%.</p>
                <button className={styles.projectIconBtn} onClick={() => navigateTo('/services')}><FaArrowRight className={styles.rotateIcon} /></button>
              </div>
            </motion.div>

            <motion.div className={styles.projectCard} variants={fadeUpItem}>
              <img src={project4} alt="Smart Home Climate Control" className={styles.projectImg} />
              <div className={styles.projectCardContent}>
                <h3>Smart Home Climate Control</h3>
                <p>Integration of smart thermostats with VRV technology, allowing the homeowner full mobile control over their cooling.</p>
                <button className={styles.projectIconBtn} onClick={() => navigateTo('/services')}><FaArrowRight className={styles.rotateIcon} /></button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 7: TESTIMONIALS --- */}
      <motion.section className={styles.testimonialsSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>
        <div className={styles.projectsContainer}>
          <div className={styles.testimonialsHeader}>
            <div className={styles.badgeSolid}>
              <FaSnowflake className={styles.badgeIconSolid} />
              <span>Testimonial</span>
            </div>
            <h2 className={styles.sectionTitleCenter}>
              Success Stories from Happy Homeowners
            </h2>
            <p className={styles.sectionDescCenter}>
              Don't just take our word for it. Here is what homeowners and<br/>
              business managers across Hyderabad have to say about our fast and reliable service.
            </p>
          </div>

          <motion.div className={styles.testimonialsGrid} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {[
              { name: "Jerome Bell", location: "Riverside District", avatar: avatarJerome, text: "The team arrived within an hour of my call. They quickly diagnosed the gas leak in my split AC, fixed it, and didn't leave any mess behind. True professionals!" },
              { name: "Eleanor Pena", location: "Downtown Area", avatar: avatarEleanor, text: "We hired them to upgrade our office ducting. Not only were they incredibly affordable, but they finished the entire installation over the weekend so our work wasn't disrupted." },
              { name: "Robert Fox", location: "Oakwood Business Park", avatar: avatarRobert, text: "I've used several AC services in Hyderabad, but this company is by far the best. Their AMC package gives me complete peace of mind. Highly recommended." }
            ].map((testimonial, idx) => (
              <motion.div key={idx} className={styles.testimonialCard} variants={fadeUpItem}>
                <div className={styles.testimonialBg}>
                   <FaSnowflake className={styles.bgSnow1} />
                   <FaSnowflake className={styles.bgSnow2} />
                   <FaSnowflake className={styles.bgSnow3} />
                </div>
                
                <div className={styles.starsRow}>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className={styles.testimonialText}>
                  {testimonial.text}
                </p>
                <div className={styles.testimonialAuthor}>
                  <img src={testimonial.avatar} alt={testimonial.name} className={styles.authorAvatar} />
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* --- Section 8: CTA / BOOK NOW --- */}
      <motion.section className={styles.ctaSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Experience Ultimate Cooling Comfort?</h2>
          <p className={styles.ctaDesc}>
            Book a service today and let our certified technicians ensure your AC runs efficiently all year round. Fast, affordable, and 100% reliable.
          </p>
          <div className={styles.ctaActions}>
            <button className={styles.ctaBtnPrimary} onClick={() => onBookNow('General HVAC Consultation')}>
              Book Now <FaArrowRight className={styles.btnIcon} />
            </button>
            <a href="tel:+918712322475" className={styles.ctaBtnOutline}>
              <FaPhoneAlt /> Call +91 87123 22475
            </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
