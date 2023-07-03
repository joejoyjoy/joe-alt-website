import React from 'react'
import HeroSection from '@/views/components/landingPage/heroSection'
import AboutSection from '@/views/components/landingPage/aboutSection'
import ContactSection from '@/views/components/landingPage/contactSection'
import './landingPage.scss'
import PdfViewer from '../UI/pdfViewer/PdfViewer'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <PdfViewer />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default LandingPage