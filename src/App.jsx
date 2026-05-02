import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import BookingPage from './pages/BookingPage'
import PremiumFooter from './components/contact/PremiumFooter'
import styles from './App.module.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  const navigate = useNavigate()

  const handleBookNow = (serviceTitle = 'General HVAC Consultation') => {
    // Navigate to booking page with the service title as state
    navigate('/booking', { state: { serviceTitle } })
  }

  return (
    <div className={styles.page}>
      <Navbar onBookNow={handleBookNow} />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage onBookNow={handleBookNow} />} />
        <Route path="/services" element={<ServicesPage onBookNow={handleBookNow} />} />
        <Route path="/services/:slug" element={<ServiceDetailPage onBookNow={handleBookNow} />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage onBookNow={handleBookNow} />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <PremiumFooter />
    </div>
  )
}
