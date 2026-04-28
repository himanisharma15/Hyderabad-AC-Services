import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
  FaUser,
  FaWrench,
} from 'react-icons/fa';
import styles from './ServiceFormModal.module.css';

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.22, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.98,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
};

export default function ServiceFormModal({ isOpen, selectedService, onClose }) {
  const nameInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredDate: '',
    address: '',
    notes: '',
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timer = window.setTimeout(() => {
      nameInputRef.current?.focus();
    }, 80);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitting(false);
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        preferredDate: '',
        address: '',
        notes: '',
      });
    }
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 1100);
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          onMouseDown={handleOverlayClick}
          aria-hidden={!isOpen}
        >
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Book Service Form"
          >
            <button className={styles.closeButton} type="button" onClick={onClose} aria-label="Close form">
              <FaTimes />
            </button>

            <div className={styles.topBar}>
              <span className={styles.topTag}>Priority Booking</span>
            </div>

            <h3>Book Your Service</h3>
            <p>Share your details and we will confirm your appointment shortly.</p>

            <div className={styles.serviceTypeBar}>
              <span>Selected Service</span>
              <strong>{selectedService || 'General AC Service'}</strong>
            </div>

            {isSubmitted ? (
              <div className={styles.successBox}>
                <h4>Request Submitted Successfully</h4>
                <p>
                  Thank you{formData.fullName ? `, ${formData.fullName}` : ''}. Our team will contact you soon for
                  {` ${selectedService || 'your requested service'}`}.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGrid}>
                  <label className={styles.field}>
                    <span>Full Name</span>
                    <div className={styles.inputWrap}>
                      <FaUser />
                      <input
                        ref={nameInputRef}
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                  </label>

                  <label className={styles.field}>
                    <span>Phone Number</span>
                    <div className={styles.inputWrap}>
                      <FaPhoneAlt />
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </label>

                  <label className={styles.field}>
                    <span>Service Type</span>
                    <div className={`${styles.inputWrap} ${styles.readonlyField}`}>
                      <FaWrench />
                      <input type="text" value={selectedService} readOnly placeholder="Selected service" />
                    </div>
                  </label>

                  <label className={styles.field}>
                    <span>Preferred Date</span>
                    <div className={styles.inputWrap}>
                      <FaCalendarAlt />
                      <input
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>

                <label className={styles.field}>
                  <span>Address</span>
                  <div className={styles.inputWrap}>
                    <FaMapMarkerAlt />
                    <input
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter service address"
                    />
                  </div>
                </label>

                <label className={styles.field}>
                  <span>Additional Notes</span>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific issue or instructions"
                  />
                </label>

                <motion.button
                  className={styles.submitButton}
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? undefined : { y: -2 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}