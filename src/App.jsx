import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import ServiceFormModal from './components/ServiceFormModal'
import PremiumFooter from './components/contact/PremiumFooter'
import styles from './App.module.css'

// AC Service Pages
import ACServiceDetail from './pages/services/ACService'
import CentralizedACDetail from './pages/services/CentralizedAC'
import CopperPipeDetail from './pages/services/CopperPipe'
import DuctingDetail from './pages/services/Ducting'
import ACGasLeakDetail from './pages/services/ACGasLeak'
import ACInstallationDetail from './pages/services/ACInstallation'
import ACRepairDetail from './pages/services/ACRepair'
import ACScrapDetail from './pages/services/ACScrap'
import AirCurtainDetail from './pages/services/AirCurtain'

// Exhaust Service Pages
import AMCDetail from './pages/services/AMC'
import BasementExhaustDetail from './pages/services/BasementExhaust'
import RestaurantExhaustCleaningDetail from './pages/services/RestaurantExhaustCleaning'

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage onBookNow={handleOpenModal} />} />

          {/* AC Service Detail Routes */}
          <Route path="/ac-service" element={<ACServiceDetail />} />
          <Route path="/centralized-ac" element={<CentralizedACDetail />} />
          <Route path="/copper-pipe" element={<CopperPipeDetail />} />
          <Route path="/ducting" element={<DuctingDetail />} />
          <Route path="/ac-gas-leak" element={<ACGasLeakDetail />} />
          <Route path="/ac-installation" element={<ACInstallationDetail />} />
          <Route path="/ac-repair" element={<ACRepairDetail />} />
          <Route path="/ac-scrap" element={<ACScrapDetail />} />
          <Route path="/air-curtain" element={<AirCurtainDetail />} />

          {/* Exhaust Service Detail Routes */}
          <Route path="/amc" element={<AMCDetail />} />
          <Route path="/basement-exhaust" element={<BasementExhaustDetail />} />
          <Route path="/restaurant-exhaust-cleaning" element={<RestaurantExhaustCleaningDetail />} />

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
