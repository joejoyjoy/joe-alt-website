import React from 'react'
import { useTranslation } from 'react-i18next'
import NavBarComponent from '@/views/components/header'
import Socials from '@/views/UI/socials/Socials';
import './landingPageLayout.scss'

const LandingPageLayout = () => {
  const { t } = useTranslation();

  return (
    <main className="landing-page-layout">
      <NavBarComponent />
      {t("landingPage_title")}
      <Socials />
    </main>
  )
}

export default LandingPageLayout