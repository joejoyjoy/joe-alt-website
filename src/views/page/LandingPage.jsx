import React from 'react'
import HeroSection from '@/views/components/landingPage/heroSection'
import AboutSection from '@/views/components/landingPage/aboutSection'
import ExperienceSection from '@/views/components/landingPage/experienceSection'
import ContactSection from '@/views/components/landingPage/contactSection'
import './landingPage.scss'
import PdfViewer from '../UI/pdfViewer/PdfViewer'

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </div>
      <PdfViewer />
    </>
  )
}

export default LandingPage