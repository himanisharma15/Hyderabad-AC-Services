import React, { useEffect } from 'react';
import HeroSection from '../components/contact/HeroSection';
import BranchesSection from '../components/contact/BranchesSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import MapSection from '../components/contact/MapSection';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Contact Us - Hyderabad AC Services';
    
    // Add class for page-level styling
    document.body.classList.add('contact-page');
    
    return () => {
      document.body.classList.remove('contact-page');
    };
  }, []);

  return (
    <div className="contact-page-wrapper">
      <HeroSection />
      <BranchesSection />
      <ContactFormSection />
      <MapSection />
    </div>
  );
};

export default ContactPage;
