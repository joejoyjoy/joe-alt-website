import React from 'react'
import HeroSection from '@/views/components/landingPage/heroSection'
import AboutSection from '@/views/components/landingPage/aboutSection'
import './landingPage.scss'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default LandingPage