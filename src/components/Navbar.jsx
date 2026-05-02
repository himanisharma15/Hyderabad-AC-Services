import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const companyLogoSrc = '/company-logo2.jpg';
const fallbackLogoSrc = '/favicon.svg';

const acDropdownItems = [
  { id: 'ac-service', label: 'AC Service', path: '/services/ac-service' },
  { id: 'centralized-ac', label: 'Centralized Air Conditioning', path: '/services/centralized-ac' },
  { id: 'copper-pipe', label: 'Copper Pipe Planning', path: '/services/copper-pipe' },
  { id: 'ducting', label: 'Ducting', path: '/services/ducting' },
  { id: 'ac-gas-leak', label: 'AC Gas Leak', path: '/services/ac-gas-leak' },
  { id: 'ac-installation', label: 'AC Installation', path: '/services/ac-installation' },
  { id: 'ac-repair', label: 'AC Repair', path: '/services/ac-repair' },
  { id: 'ac-scrap', label: 'AC Scrap', path: '/services/ac-scrap' },
  { id: 'air-curtain', label: 'Air Curtain', path: '/services/air-curtain' },
];

const exhaustDropdownItems = [
  { id: 'amc', label: "AMC's", path: '/services/annual-maintenance-contracts-hvac' },
  { id: 'basement-exhaust', label: 'Basement Exhaust', path: '/services/basement-exhaust-ventilation-systems' },
  { id: 'restaurant-exhaust-cleaning', label: 'Restaurant Exhaust Cleaning', path: '/services/commercial-restaurant-exhaust-cleaning' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.16, ease: 'easeIn' } },
};

const trackableSections = [
  'home',
  'air-conditioning',
  'exhaust',
  'contact',
];

function isAirConditioningSection(id) {
  return (
    id === 'air-conditioning' ||
    id === 'ac-service' ||
    id === 'centralized-ac' ||
    id === 'copper-pipe' ||
    id === 'ducting' ||
    id === 'ac-gas-leak' ||
    id === 'ac-installation' ||
    id === 'ac-repair' ||
    id === 'ac-scrap' ||
    id === 'air-curtain'
  );
}

function isExhaustSection(id) {
  return (
    id === 'exhaust' ||
    id === 'amc' ||
    id === 'basement-exhaust' ||
    id === 'restaurant-exhaust-cleaning'
  );
}

function handleLogoLoadError(event) {
  const image = event.currentTarget;
  if (image.getAttribute('src') === fallbackLogoSrc) {
    return;
  }
  image.setAttribute('src', fallbackLogoSrc);
}

export default function Navbar({ onBookNow }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(false);
  const [openExhaustDropdown, setOpenExhaustDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAcAccordionOpen, setIsMobileAcAccordionOpen] = useState(false);
  const [isMobileExhaustAccordionOpen, setIsMobileExhaustAccordionOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const currentPathname = location.pathname;
  const isServicesRoute = currentPathname.startsWith('/services');
  const isContactRoute = currentPathname.startsWith('/contact');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      trackableSections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setOpenDesktopDropdown(false);
    setOpenExhaustDropdown(false);
    setIsMobileMenuOpen(false);
    setIsMobileAcAccordionOpen(false);
    setIsMobileExhaustAccordionOpen(false);
  };

  const navigateTo = (pathname) => {
    navigate(pathname);
    closeMenus();
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <button className={styles.logo} type="button" onClick={() => navigateTo('/')}>
          <img
            src={companyLogoSrc}
            alt="Hyderabad AC Services Logo"
            className={styles.logoImage}
            onError={handleLogoLoadError}
          />
        </button>

        <div className={styles.desktopMenu}>
          <button
            className={`${styles.navLink} ${currentPathname === '/' ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => navigateTo('/')}
          >
            Home
          </button>

          <button
            className={`${styles.navLink} ${currentPathname.startsWith('/about') ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => navigateTo('/about')}
          >
            About Us
          </button>

          <button
            className={`${styles.navLink} ${isServicesRoute ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => navigateTo('/services')}
          >
            Services
          </button>

          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setOpenDesktopDropdown(true)}
            onMouseLeave={() => setOpenDesktopDropdown(false)}
          >
            <button
              className={`${styles.navLink} ${isAirConditioningSection(activeSection) || (isServicesRoute && !isExhaustSection(activeSection)) ? styles.navLinkActive : ''}`}
              type="button"
            >
              Air Conditioning
              <FaChevronDown className={openDesktopDropdown ? styles.rotated : ''} />
            </button>

            <AnimatePresence>
              {openDesktopDropdown && (
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
                        className={`${styles.dropdownItem} ${currentPathname === item.path ? styles.dropdownItemActive : ''}`}
                        onClick={() => navigateTo(item.path)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setOpenExhaustDropdown(true)}
            onMouseLeave={() => setOpenExhaustDropdown(false)}
          >
            <button
              className={`${styles.navLink} ${isExhaustSection(activeSection) || (isServicesRoute && isExhaustSection(activeSection)) ? styles.navLinkActive : ''}`}
              type="button"
            >
              Exhaust
              <FaChevronDown className={openExhaustDropdown ? styles.rotated : ''} />
            </button>

            <AnimatePresence>
              {openExhaustDropdown && (
                <motion.ul
                  className={styles.dropdownMenu}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  {exhaustDropdownItems.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`${styles.dropdownItem} ${currentPathname === item.path ? styles.dropdownItemActive : ''}`}
                        onClick={() => navigateTo(item.path)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            className={`${styles.navLink} ${isContactRoute ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => navigateTo('/contact')}
          >
            Contact
          </button>

          <button className={styles.bookButton} type="button" onClick={() => onBookNow('General HVAC Consultation')}>
            Schedule Service
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
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <button className={styles.mobileLink} type="button" onClick={() => navigateTo('/')}>Home</button>
            <button className={styles.mobileLink} type="button" onClick={() => navigateTo('/about')}>About</button>
            <button className={styles.mobileLink} type="button" onClick={() => navigateTo('/services')}>Services</button>

            <div className={styles.mobileDropdownWrap}>
              <button className={styles.mobileDropdownToggle} type="button" onClick={() => setIsMobileAcAccordionOpen(!isMobileAcAccordionOpen)}>
                <span>Air Conditioning</span>
                <FaChevronDown className={isMobileAcAccordionOpen ? styles.rotated : ''} />
              </button>
              <AnimatePresence>
                {isMobileAcAccordionOpen && (
                  <motion.ul className={styles.mobileDropdownMenu} variants={dropdownVariants} initial="hidden" animate="show" exit="exit">
                    {acDropdownItems.map((item) => (
                      <li key={item.id}>
                        <button type="button" onClick={() => navigateTo(item.path)}>{item.label}</button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <div className={styles.mobileDropdownWrap}>
              <button className={styles.mobileDropdownToggle} type="button" onClick={() => setIsMobileExhaustAccordionOpen(!isMobileExhaustAccordionOpen)}>
                <span>Exhaust</span>
                <FaChevronDown className={isMobileExhaustAccordionOpen ? styles.rotated : ''} />
              </button>
              <AnimatePresence>
                {isMobileExhaustAccordionOpen && (
                  <motion.ul className={styles.mobileDropdownMenu} variants={dropdownVariants} initial="hidden" animate="show" exit="exit">
                    {exhaustDropdownItems.map((item) => (
                      <li key={item.id}>
                        <button type="button" onClick={() => navigateTo(item.path)}>{item.label}</button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <button className={styles.mobileLink} type="button" onClick={() => navigateTo('/contact')}>Contact</button>
            <button className={styles.mobileBookButton} type="button" onClick={() => onBookNow('General HVAC Consultation')}>Schedule Service</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
