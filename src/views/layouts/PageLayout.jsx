import React from 'react'
import { useTranslation } from 'react-i18next'
import NavBarComponent from '@/views/components/header'
import Socials from '@/views/UI/socials/Socials';
import FooterComponent from '../components/footer/FooterComponent';
import LandingPage from '../page/LandingPage';
import './pageLayout.scss'

const PageLayout = () => {
  const { t } = useTranslation();

  return (
    <main className="page-layout">
      <NavBarComponent />
      <div className="page-layout__landing-page">
        <LandingPage />
      </div>
      <Socials />
      <FooterComponent />
    </main>
  )
}

export default PageLayout