
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import './PremiumFooter.css';

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerData = {
    contact: {
      title: 'Hyderabad AC Services',
      description: 'Trusted AC installation, repair and HVAC support across Hyderabad',
      phone: '+91 8712322475',
      email: 'info@hyderabadacservices.com',
      hours: '24/7',
    },
    services: [
      { name: 'AC Service', link: '/ac-service' },

      { name: 'AC Service', link: '/services/ac-service' },
      { name: 'AC Repair', link: '/services/ac-repair' },
      { name: 'AC Installation', link: '/services/ac-installation' },
      { name: 'Ducting', link: '/services/ducting' },
      { name: 'Centralized AC', link: '/services/centralized-ac' },
    ],
    quickLinks: [
      { name: 'Home', link: '/' },
      { name: 'About Us', link: '/about' },
      { name: 'Services', link: '/services' },
      { name: 'Contact', link: '/contact' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, link: 'https://facebook.com' },
      { name: 'Instagram', icon: Instagram, link: 'https://instagram.com' },
      { name: 'WhatsApp', icon: MessageCircle, link: 'https://wa.me/918712322475' },
    ],
  };

  return (
    <footer className="premium-footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Column 1: Contact Info */}
          <div className="footer-column contact-column">
            <h3 className="footer-column-title">Contact Info</h3>
            <div className="footer-logo">
              <div className="footer-logo-icon">AC</div>
              <p className="footer-brand-name">{footerData.contact.title}</p>
            </div>
            <p className="footer-description">{footerData.contact.description}</p>

            <div className="footer-contact-items">
              <a href={`tel:${footerData.contact.phone}`} className="footer-contact-item">
                <Phone size={18} />
                <span>{footerData.contact.phone}</span>
              </a>
              <a href={`mailto:${footerData.contact.email}`} className="footer-contact-item">
                <Mail size={18} />
                <span>{footerData.contact.email}</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-column services-column">
            <h3 className="footer-column-title">Services</h3>
            <ul className="footer-link-list">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <a href={service.link} className="footer-link">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-column links-column">
            <h3 className="footer-column-title">Quick Links</h3>
            <ul className="footer-link-list">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social & Hours */}
          <div className="footer-column social-column">
            <h3 className="footer-column-title">Connect With Us</h3>
            
            <div className="footer-social-links">
              {footerData.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    title={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <div className="footer-hours">
              <h4 className="hours-title">Working Hours</h4>
              <p className="hours-text">{footerData.contact.hours}</p>
              <p className="hours-subtext">Available Daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            <p>© 2026 Hyderabad AC Services. All rights reserved. | Trusted AC Installation & Repair Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
