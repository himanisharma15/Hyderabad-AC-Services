import { useEffect, useState } from 'react';
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

  const isServicesPage = pathname.startsWith('/services');

  return (
    <div className={styles.page}>
      <Navbar onBookNow={handleOpenModal} currentPathname={pathname} />

      {isServicesPage ? (
        <ServicesPage onBookNow={handleOpenModal} />
      ) : (
        <HomePage onBookNow={handleOpenModal} />
      )}

      <ServiceFormModal
        isOpen={isModalOpen}
        selectedService={selectedService}
        onClose={handleCloseModal}
      />
    </div>
  );
}
