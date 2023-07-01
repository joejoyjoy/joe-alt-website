import React from 'react'
import { useTranslation } from 'react-i18next'
import useWindowSizeReport from '@/hooks/useWindowSizeReport'
import { responsiveTabletBreak } from '@/utils/componentsConstants'
import Socials from '@/views/components/socials'
import './footerComponent.scss'

const FooterComponent = () => {
  const { t } = useTranslation();
  const screenWidth = useWindowSizeReport();

  return (
    <footer className="footer-component">
      {screenWidth <= responsiveTabletBreak && <Socials />}
      <a href="https://www.linkedin.com/in/joe-alt" className="footer-component__paragraph">{t("footer_credit")}</a>
    </footer>
  )
}

export default FooterComponent