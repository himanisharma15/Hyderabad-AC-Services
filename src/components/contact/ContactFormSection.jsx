import React, { useState } from 'react';
import { MapPin, Clock, CheckCircle } from 'lucide-react';
import acServiceImage from '../../assets/2f3aa925-8713-4c37-8c14-9b01f40a33f5_.jpg';
import './ContactFormSection.css';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'AC Service',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    'AC Service',
    'AC Repair',
    'AC Installation',
    'Ducting',
    'Centralized AC',
    'Air Curtain',
    'Copper Piping',
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Filter phone input to only allow numbers
    let finalValue = value;
    if (name === 'phone') {
      finalValue = value.replace(/\D/g, '').slice(0, 10);
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'AC Service',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          {/* Form Side */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h2 className="form-title">Tell us what you need</h2>
              <p className="form-subtitle">
                Use the form below for a fast callback from our support team
              </p>
            </div>

            {submitted && (
              <div className="success-message">
                <CheckCircle size={24} />
                <p>Thank you! We've received your message and will contact you soon.</p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit phone number"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="10"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your business email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Service Type Dropdown */}
              <div className="form-group">
                <label htmlFor="serviceType" className="form-label">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="form-input select-input"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements..."
                  rows="5"
                  className={`form-input textarea-input ${errors.message ? 'error' : ''}`}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="contact-info-wrapper">
            {/* Technician Image Section */}
            <div className="info-image-container">
              <div className="image-wrapper">
                <img 
                  src={acServiceImage} 
                  alt="AC Service" 
                  className="technician-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="image-caption">
                <h3>Easy to Contact us</h3>
                <p>Professional AC services at your doorstep</p>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="why-card">
              <h3 className="why-title">Why customers call us</h3>
              <ul className="why-list">
                <li className="why-item">
                  <span className="why-icon">✓</span>
                  <span>Prompt response for residential and commercial requests</span>
                </li>
                <li className="why-item">
                  <span className="why-icon">✓</span>
                  <span>Professional service with clear communication</span>
                </li>
                <li className="why-item">
                  <span className="why-icon">✓</span>
                  <span>Flexible support for maintenance and emergency repairs</span>
                </li>
                <li className="why-item">
                  <span className="why-icon">✓</span>
                  <span>Certified technicians with years of experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
