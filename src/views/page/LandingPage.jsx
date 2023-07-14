import React from 'react'
import HeroSection from '@/views/components/heroSection'
import AboutSection from '@/views/components/aboutSection'
import ExperienceSection from '@/views/components/experienceSection'
import WorkSection from '@/views/components/workSection'
import RecommendsSection from '@/views/components/recommendsSection'
import ContactSection from '@/views/components/contactSection'
import './landingPage.scss'
import PdfViewer from '../UI/pdfViewer/PdfViewer'

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <RecommendsSection />
        <ContactSection />
      </div>
      <PdfViewer />
    </>
  )
}

export default LandingPage