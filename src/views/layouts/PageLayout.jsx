import React from 'react'
import { useTranslation } from 'react-i18next'
import NavBarComponent from '@/views/components/header'
import Socials from '@/views/UI/socials/Socials';
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
    </main>
  )
}

export default PageLayout