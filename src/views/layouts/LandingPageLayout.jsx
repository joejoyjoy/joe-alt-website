import React from 'react'
import { useTranslation } from 'react-i18next'
import NavBarComponent from '@/views/components/header'

const LandingPageLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBarComponent />
      {t("landingPage_title")}
    </>
  )
}

export default LandingPageLayout