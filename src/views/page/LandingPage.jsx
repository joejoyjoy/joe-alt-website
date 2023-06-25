import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import AboutSection from '../components/aboutSection/AboutSection'
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