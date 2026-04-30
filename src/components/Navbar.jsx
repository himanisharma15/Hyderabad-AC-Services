import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const acDropdownItems = [
  { id: 'ac-service', label: 'AC Service' },
  { id: 'ac-installation', label: 'AC Installation' },
  { id: 'ac-repair', label: 'AC Repair' },
  { id: 'ducting', label: 'Ducting' },
  { id: 'gas-leak-fix', label: 'Gas Leak Fix' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.16, ease: 'easeIn' } },
};

const trackableSections = [
  'home',
  'air-conditioning',
  'ac-service',
  'ac-installation',
  'ac-repair',
  'ducting',
  'gas-leak-fix',
  'exhaust',
];

function isAirConditioningSection(id) {
  return (
    id === 'air-conditioning' ||
    id === 'ac-service' ||
    id === 'ac-installation' ||
    id === 'ac-repair' ||
    id === 'ducting' ||
    id === 'gas-leak-fix'
  );
}

export default function Navbar({ onBookNow, currentPathname = '/' }) {
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isServicesRoute = currentPathname.startsWith('/services');
  const isBlogRoute = currentPathname.startsWith('/blog');
  const isContactRoute = currentPathname.startsWith('/contact');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';

      trackableSections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 120) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setOpenDesktopDropdown(false);
    setIsMobileMenuOpen(false);
    setIsMobileAccordionOpen(false);
  };

  const navigateTo = (pathname) => {
    if (window.location.pathname !== pathname) {
      window.history.pushState({}, '', pathname);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }

    closeMenus();
  };

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenus();
      return;
    }

    if (id === 'home') {
      navigateTo('/');
      return;
    }

    if (id === 'services') {
      navigateTo('/services');
      return;
    }

    window.location.href = `/#${id}`;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <button className={styles.logo} type="button" onClick={() => scrollToSection('home')}>
          <span>HVAC</span>
          <strong>Prime</strong>
        </button>

        <div className={styles.desktopMenu}>
          <button
            className={`${styles.navLink} ${activeSection === 'home' && !isServicesRoute ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>

          <button
            className={`${styles.navLink} ${isServicesRoute ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => navigateTo('/services')}
          >
            Services
          </button>

          <button
            className={`${styles.navLink} ${isBlogRoute ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => navigateTo('/blog')}
          >
            Blog
          </button>

          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setOpenDesktopDropdown(true)}
            onMouseLeave={() => setOpenDesktopDropdown(false)}
          >
            <button
              className={`${styles.navLink} ${isAirConditioningSection(activeSection) ? styles.navLinkActive : ''}`}
              type="button"
              onClick={() => setOpenDesktopDropdown((prev) => !prev)}
            >
              Air Conditioning
              <FaChevronDown className={openDesktopDropdown ? styles.rotated : ''} />
            </button>

            <AnimatePresence>
              {openDesktopDropdown ? (
                <motion.ul
                  className={styles.dropdownMenu}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  {acDropdownItems.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`${styles.dropdownItem} ${activeSection === item.id ? styles.dropdownItemActive : ''}`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </div>

          <button
            className={`${styles.navLink} ${activeSection === 'exhaust' ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => scrollToSection('exhaust')}
          >
            Exhaust
          </button>

          <button
            className={`${styles.navLink} ${isContactRoute ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => navigateTo('/contact')}
          >
            Contact
          </button>

          <button className={styles.bookButton} type="button" onClick={() => onBookNow('General HVAC Consultation')}>
            Book Now
          </button>
        </div>

        <button
          className={styles.mobileToggle}
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <button className={styles.mobileLink} type="button" onClick={() => scrollToSection('home')}>
              Home
            </button>

            <button
              className={`${styles.mobileLink} ${isServicesRoute ? styles.navLinkActive : ''}`}
              type="button"
              onClick={() => navigateTo('/services')}
            >
              Services
            </button>

            <button className={styles.mobileLink} type="button" onClick={() => navigateTo('/blog')}>
              Blog
            </button>

            <div className={styles.mobileDropdownWrap}>
              <button
                className={styles.mobileDropdownToggle}
                type="button"
                onClick={() => setIsMobileAccordionOpen((prev) => !prev)}
              >
                <span>Air Conditioning</span>
                <FaChevronDown className={isMobileAccordionOpen ? styles.rotated : ''} />
              </button>

              <AnimatePresence>
                {isMobileAccordionOpen ? (
                  <motion.ul
                    className={styles.mobileDropdownMenu}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    {acDropdownItems.map((item) => (
                      <li key={item.id}>
                        <button type="button" onClick={() => scrollToSection(item.id)}>
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </div>

            <button className={styles.mobileLink} type="button" onClick={() => scrollToSection('exhaust')}>
              Exhaust
            </button>

            <button className={styles.mobileLink} type="button" onClick={() => navigateTo('/contact')}>
              Contact
            </button>

            <button
              className={styles.mobileBookButton}
              type="button"
              onClick={() => {
                onBookNow('General HVAC Consultation');
                closeMenus();
              }}
            >
              Book Now
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
