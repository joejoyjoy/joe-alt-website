import React from 'react'
import HeroSection from '@/views/components/landingPage/heroSection'
import AboutSection from '@/views/components/landingPage/aboutSection'
import ContactSection from '@/views/components/landingPage/contactSection'
import './landingPage.scss'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default LandingPage