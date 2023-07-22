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
        <div className="landing-page__section">
          <div className="landing-page__section--wrapper">
            <HeroSection />
          </div>
        </div>
        <div className="landing-page__section white-section">
          <div className="landing-page__section--wrapper">
            <AboutSection />
          </div>
        </div>
        <div className="landing-page__section white-section">
          <div className="landing-page__section--wrapper">
            <ExperienceSection />
          </div>
        </div>
        <div className="landing-page__section white-section">
          <div className="landing-page__section--wrapper">
            <WorkSection />
          </div>
        </div>
        <div className="landing-page__section white-section">
          <div className="landing-page__section--wrapper">
            <RecommendsSection />
          </div>
        </div>
        <div className="landing-page__section">
          <div className="landing-page__section--wrapper">
            <ContactSection />
          </div>
        </div>
      </div>
      <PdfViewer />
    </>
  )
}

export default LandingPage