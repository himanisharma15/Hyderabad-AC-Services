import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServiceFormModal from './components/ServiceFormModal'
import PremiumFooter from './components/contact/PremiumFooter'
import styles from './App.module.css'

// Specialized Exhaust Pages
import BasementExhaust from './pages/services/BasementExhaust'
import RestaurantExhaustCleaning from './pages/services/RestaurantExhaustCleaning'
import AMC from './pages/services/AMC'
import ACRepair from './pages/services/ACRepair'
import ACService from './pages/services/ACService'
import ACInstallation from './pages/services/ACInstallation'
import ACScrap from './pages/services/ACScrap'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  const [selectedService, setSelectedService] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  const handleOpenModal = (serviceTitle = 'General HVAC Consultation') => {
    setSelectedService(serviceTitle)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <BrowserRouter>
      <div className={styles.page}>
        <Navbar onBookNow={handleOpenModal} />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage onBookNow={handleOpenModal} />} />
          <Route path="/services" element={<ServicesPage onBookNow={handleOpenModal} />} />
          
          {/* Specialized Routes */}
          <Route path="/services/basement-exhaust-ventilation-systems" element={<BasementExhaust onBookNow={handleOpenModal} />} />
          <Route path="/services/commercial-restaurant-exhaust-cleaning" element={<RestaurantExhaustCleaning onBookNow={handleOpenModal} />} />
          <Route path="/services/annual-maintenance-contracts-hvac" element={<AMC onBookNow={handleOpenModal} />} />
          
          <Route path="/services/ac-repair" element={<ACRepair onBookNow={handleOpenModal} />} />
          <Route path="/services/ac-service" element={<ACService onBookNow={handleOpenModal} />} />
          <Route path="/services/ac-installation" element={<ACInstallation onBookNow={handleOpenModal} />} />
          <Route path="/services/ac-scrap" element={<ACScrap onBookNow={handleOpenModal} />} />

          <Route path="/services/:slug" element={<ServiceDetailPage onBookNow={handleOpenModal} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage onBookNow={handleOpenModal} />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <PremiumFooter />
        <ServiceFormModal
          isOpen={isModalOpen}
          selectedService={selectedService}
          onClose={handleCloseModal}
        />
      </div>
    </BrowserRouter>
  )
}
