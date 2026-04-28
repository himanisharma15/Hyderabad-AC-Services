import { useEffect } from 'react'
import HeroSection from '../components/contact/HeroSection'
import BranchesSection from '../components/contact/BranchesSection'
import ContactFormSection from '../components/contact/ContactFormSection'
import MapSection from '../components/contact/MapSection'
import './ContactPage.css'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact Us - Hyderabad AC Services'
    document.body.classList.add('contact-page')

    return () => {
      document.body.classList.remove('contact-page')
    }
  }, [])

  return (
    <div className="contact-page-wrapper">
      <HeroSection />
      <BranchesSection />
      <ContactFormSection />
      <MapSection />
    </div>
  )
}

export default ContactPage
