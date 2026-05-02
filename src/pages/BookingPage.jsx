import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaChevronDown,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaWrench,
  FaArrowLeft,
  FaCheckCircle
} from 'react-icons/fa';
import styles from './BookingPage.module.css';

export default function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceType: location.state?.serviceTitle || 'General HVAC Consultation',
    preferredDate: '',
    address: '',
    notes: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successWrapper}>
        <motion.div 
          className={styles.successCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <FaCheckCircle className={styles.successIcon} />
          <h1>Booking Confirmed!</h1>
          <p>
            Thank you, <strong>{formData.fullName}</strong>. Our team has received your request for <strong>{formData.serviceType}</strong>.
          </p>
          <p className={styles.successSub}>We will call you shortly to finalize the schedule.</p>
          <button onClick={() => navigate('/')} className={styles.backHomeBtn}>
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <button onClick={() => navigate(-1)} className={styles.goBack}>
          <FaArrowLeft /> Back
        </button>

        <div className={styles.layout}>
          {/* Left Column - Form */}
          <motion.div 
            className={styles.formCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.badge}>Priority Service</span>
              <h1>Book Your Appointment</h1>
              <p>Fill out the form below to secure your expert AC service.</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label>Select Service</label>
                <div className={styles.inputWrap}>
                  <FaWrench />
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="General HVAC Consultation">General HVAC Consultation</option>
                    <optgroup label="Air Conditioning">
                      <option value="AC Repair">AC Repair</option>
                      <option value="AC Service">AC Service</option>
                      <option value="Centralized Air Conditioning">Centralized Air Conditioning</option>
                      <option value="Copper Pipe Planning">Copper Pipe Planning</option>
                      <option value="Ducting">Ducting</option>
                      <option value="AC Gas Leak">AC Gas Leak</option>
                      <option value="AC Installation">AC Installation</option>
                      <option value="AC Scrap">AC Scrap</option>
                      <option value="Air Curtain">Air Curtain</option>
                    </optgroup>
                    <optgroup label="Exhaust Systems">
                      <option value="AMC's">AMC's</option>
                      <option value="Basement Exhaust">Basement Exhaust</option>
                      <option value="Restaurant Exhaust Cleaning">Restaurant Exhaust Cleaning</option>
                    </optgroup>
                  </select>
                  <FaChevronDown className={styles.chevron} />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Full Name</label>
                  <div className={styles.inputWrap}>
                    <FaUser />
                    <input
                      name="fullName"
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Phone Number</label>
                  <div className={styles.inputWrap}>
                    <FaPhoneAlt />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="e.g. +91 00000 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label>Preferred Date</label>
                <div className={styles.inputWrap}>
                  <FaCalendarAlt />
                  <input
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label>Service Address</label>
                <div className={styles.inputWrap}>
                  <FaMapMarkerAlt />
                  <input
                    name="address"
                    type="text"
                    placeholder="Enter your full address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label>Additional Notes (Optional)</label>
                <textarea
                  name="notes"
                  placeholder="Describe the issue or any special instructions..."
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
              </button>
            </form>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div 
            className={styles.infoCol}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              <h3>Why Book With Us?</h3>
              <ul className={styles.benefitList}>
                <li>
                  <div className={styles.check}>✓</div>
                  <div>
                    <strong>Expert Technicians</strong>
                    <p>Certified professionals with years of HVAC experience.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.check}>✓</div>
                  <div>
                    <strong>Transparent Pricing</strong>
                    <p>No hidden costs. Get upfront quotes for all repairs.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.check}>✓</div>
                  <div>
                    <strong>90-Day Warranty</strong>
                    <p>Peace of mind with our service quality guarantee.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.contactHelp}>
              <p>Need help with booking?</p>
              <a href="tel:+918712322475" className={styles.phoneLink}>
                <FaPhoneAlt /> +91 87123 22475
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
