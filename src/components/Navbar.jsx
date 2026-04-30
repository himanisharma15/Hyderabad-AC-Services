import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const companyLogoSrc = '/company-logo2.jpg';
const fallbackLogoSrc = '/favicon.svg';

const acDropdownItems = [
  { id: 'ac-service', label: 'AC Service', path: '/ac-service' },
  { id: 'centralized-ac', label: 'Centralized Air Conditioning', path: '/centralized-ac' },
  { id: 'copper-pipe', label: 'Copper Pipe Planning', path: '/copper-pipe' },
  { id: 'ducting', label: 'Ducting', path: '/ducting' },
  { id: 'ac-gas-leak', label: 'AC Gas Leak', path: '/ac-gas-leak' },
  { id: 'ac-installation', label: 'AC Installation', path: '/ac-installation' },
  { id: 'ac-repair', label: 'AC Repair', path: '/ac-repair' },
  { id: 'ac-scrap', label: 'AC Scrap', path: '/ac-scrap' },
  { id: 'air-curtain', label: 'Air Curtain', path: '/air-curtain' },
];

const exhaustDropdownItems = [
  { id: 'amc', label: "AMC's", path: '/amc' },
  { id: 'basement-exhaust', label: 'Basement Exhaust', path: '/basement-exhaust' },
  { id: 'restaurant-exhaust-cleaning', label: 'Restaurant Exhaust Cleaning', path: '/restaurant-exhaust-cleaning' },
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
  'centralized-ac',
  'copper-pipe',
  'ducting',
  'ac-gas-leak',
  'ac-installation',
  'ac-repair',
  'ac-scrap',
  'air-curtain',
  'exhaust',
  'amc',
  'restaurant-exhaust',
  'basement-exhaust',
  'restaurant-exhaust-cleaning',
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
    id === 'restaurant-exhaust' ||
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
  const isBlogRoute = currentPathname.startsWith('/blog');
  const isContactRoute = currentPathname.startsWith('/contact');
  const isAcServiceRoute = currentPathname === '/ac-service';

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

  useEffect(() => {
    // Update active section based on route change
    if (currentPathname === '/') {
      setActiveSection('home');
    } else if (currentPathname === '/services') {
      setActiveSection('services');
    } else if (currentPathname === '/contact') {
      setActiveSection('contact');
    } else if (currentPathname === '/amc') {
      setActiveSection('amc');
    } else if (currentPathname === '/ac-service') {
      setActiveSection('ac-service');
    } else if (currentPathname === '/centralized-ac') {
      setActiveSection('centralized-ac');
    } else if (currentPathname === '/copper-pipe') {
      setActiveSection('copper-pipe');
    } else if (currentPathname === '/ducting') {
      setActiveSection('ducting');
    } else if (currentPathname === '/ac-gas-leak') {
      setActiveSection('ac-gas-leak');
    } else if (currentPathname === '/ac-installation') {
      setActiveSection('ac-installation');
    } else if (currentPathname === '/ac-repair') {
      setActiveSection('ac-repair');
    } else if (currentPathname === '/ac-scrap') {
      setActiveSection('ac-scrap');
    } else if (currentPathname === '/air-curtain') {
      setActiveSection('air-curtain');
    } else if (currentPathname === '/basement-exhaust') {
      setActiveSection('basement-exhaust');
    } else if (currentPathname === '/restaurant-exhaust-cleaning') {
      setActiveSection('restaurant-exhaust-cleaning');
    }
  }, [currentPathname]);

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

  const scrollToSection = (id) => {
    // Handle AC services
    const acService = acDropdownItems.find(item => item.id === id);
    if (acService) {
      navigateTo(acService.path);
      return;
    }

    // Handle Exhaust services
    const exhaustService = exhaustDropdownItems.find(item => item.id === id);
    if (exhaustService) {
      navigateTo(exhaustService.path);
      return;
    }

    if (id === 'contact') {
      navigateTo('/contact');
      return;
    }

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

    if (id === 'contact') {
      navigateTo('/contact');
      return;
    }

    window.location.href = `/#${id}`;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <button className={styles.logo} type="button" onClick={() => scrollToSection('home')}>
          <img
            src={companyLogoSrc}
            alt="Hyderabad AC Services Logo"
            className={styles.logoImage}
            onError={handleLogoLoadError}
          />
        </button>

        <div className={styles.desktopMenu}>
          <button
            className={`${styles.navLink} ${activeSection === 'home' && !isServicesRoute && !currentPathname.startsWith('/about') ? styles.navLinkActive : ''}`}
            type="button"
            onClick={() => scrollToSection('home')}
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
                className={`${styles.navLink} ${isAirConditioningSection(activeSection) || isAcServiceRoute ? styles.navLinkActive : ''}`}
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
                        className={`${styles.dropdownItem} ${activeSection === item.id || (item.id === 'ac-service' && isAcServiceRoute) ? styles.dropdownItemActive : ''}`}
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

          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setOpenExhaustDropdown(true)}
            onMouseLeave={() => setOpenExhaustDropdown(false)}
          >
            <button
              className={`${styles.navLink} ${isExhaustSection(activeSection) ? styles.navLinkActive : ''}`}
              type="button"
              onClick={() => setOpenExhaustDropdown((prev) => !prev)}
            >
              Exhaust
              <FaChevronDown className={openExhaustDropdown ? styles.rotated : ''} />
            </button>

            <AnimatePresence>
              {openExhaustDropdown ? (
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
              className={`${styles.mobileLink} ${currentPathname.startsWith('/about') ? styles.navLinkActive : ''}`}
              type="button"
              onClick={() => navigateTo('/about')}
            >
              About
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
                onClick={() => setIsMobileAcAccordionOpen((prev) => !prev)}
              >
                <span>Air Conditioning</span>
                <FaChevronDown className={isMobileAcAccordionOpen ? styles.rotated : ''} />
              </button>

              <AnimatePresence>
                {isMobileAcAccordionOpen ? (
                  <motion.ul
                    className={styles.mobileDropdownMenu}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    {acDropdownItems.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          className={activeSection === item.id || (item.id === 'ac-service' && isAcServiceRoute) ? styles.dropdownItemActive : ''}
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

            <div className={styles.mobileDropdownWrap}>
              <button
                className={styles.mobileDropdownToggle}
                type="button"
                onClick={() => setIsMobileExhaustAccordionOpen((prev) => !prev)}
              >
                <span>Exhaust</span>
                <FaChevronDown className={isMobileExhaustAccordionOpen ? styles.rotated : ''} />
              </button>


              <AnimatePresence>
                {isMobileExhaustAccordionOpen ? (
                  <motion.ul
                    className={styles.mobileDropdownMenu}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    {exhaustDropdownItems.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          className={activeSection === item.id ? styles.dropdownItemActive : ''}
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
              Schedule Service
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
