import React from 'react'
import { useTranslation } from 'react-i18next'
import NavBarComponent from '@/views/components/header'
import Socials from '@/views/UI/socials';
import FooterComponent from '@/views/components/footer';
import NavBackdrop from '@/views/components/mobile/backdrop';
import LandingPage from '@/views/page/LandingPage';
import './pageLayout.scss'

const PageLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBackdrop />
      <main className="page-layout">
        <NavBarComponent />
        <div className="page-layout__landing-page">
          <LandingPage />
        </div>
        <Socials />
        <FooterComponent />
      </main>
    </>
  )
}

export default PageLayout