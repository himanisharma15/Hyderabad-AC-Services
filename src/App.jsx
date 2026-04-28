import { useEffect, useState } from 'react'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import ServiceFormModal from './components/ServiceFormModal'
import styles from './App.module.css'

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname)
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

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleOpenModal = (serviceTitle = 'General HVAC Consultation') => {
    setSelectedService(serviceTitle)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const renderPage = () => {
    if (pathname.startsWith('/contact')) {
      return <ContactPage />
    }

    if (pathname.startsWith('/about')) {
      return <AboutPage onBookNow={handleOpenModal} />
    }

    if (pathname.startsWith('/blog')) {
      return <BlogPage />
    }

    if (pathname.startsWith('/services')) {
      return <ServicesPage onBookNow={handleOpenModal} />
    }

    return <HomePage onBookNow={handleOpenModal} />
  }

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
  )
}
