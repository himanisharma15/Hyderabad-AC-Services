import { useEffect, useState } from 'react';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ServiceFormModal from './components/ServiceFormModal';
import styles from './App.module.css';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleOpenModal = (serviceTitle = 'General HVAC Consultation') => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderPage = () => {
    if (pathname.startsWith('/contact')) {
      return <ContactPage />;
    }

    if (pathname.startsWith('/blog')) {
      return <BlogPage />;
    }

    if (pathname.startsWith('/services')) {
      return <ServicesPage onBookNow={handleOpenModal} />;
    }

    return <HomePage onBookNow={handleOpenModal} />;
  };

  return (
    <div className={styles.page}>
      <Navbar onBookNow={handleOpenModal} currentPathname={pathname} />

      {renderPage()}

      <ServiceFormModal
        isOpen={isModalOpen}
        selectedService={selectedService}
        onClose={handleCloseModal}
      />
    </div>
  );
}
