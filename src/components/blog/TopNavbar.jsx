import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import './TopNavbar.css';

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = window.location.pathname;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const navigateTo = (href) => (event) => {
    event.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setIsOpen(false);
  };

  return (
    <header className="blog-navbar">
      <div className="blog-navbar__inner">
        <a href="/" className="blog-navbar__brand" aria-label="Hyderabad AC Services home">
          <span className="blog-navbar__brand-top">HYDERABAD</span>
          <span className="blog-navbar__brand-bottom">AC SERVICES</span>
          <span className="blog-navbar__brand-sub">Sales &amp; Service of Air Conditioning Systems</span>
        </a>

        <button
          type="button"
          className="blog-navbar__toggle"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`blog-navbar__nav ${isOpen ? 'is-open' : ''}`}>
          <ul className="blog-navbar__links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={navigateTo(item.href)}
                  className={`blog-navbar__link ${pathname === item.href || (item.label === 'Blog' && pathname === '/') ? 'is-active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="blog-navbar__actions">
            <button type="button" className="blog-navbar__language">
              <span>English</span>
              <ChevronDown size={15} />
            </button>

            <a href="#latest-insights" onClick={navigateTo('/contact')} className="blog-navbar__book-now">
              Book Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopNavbar;
