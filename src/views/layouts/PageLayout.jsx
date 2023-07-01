import React from 'react'
import useWindowSizeReport from '@/hooks/useWindowSizeReport'
import NavBarComponent from '@/views/components/header'
import { responsiveDesktopBreak, responsiveTabletBreak } from '@/utils/componentsConstants'
import Socials from '@/views/UI/socials';
import FooterComponent from '@/views/components/footer';
import NavBackdrop from '@/views/components/mobile/backdrop';
import LandingPage from '@/views/page/LandingPage';
import './pageLayout.scss'

const PageLayout = () => {
  const screenWidth = useWindowSizeReport();

  return (
    <>
      {screenWidth < responsiveDesktopBreak && <NavBackdrop />}
      <main className="page-layout">
        <NavBarComponent />
        <div className="page-layout__landing-page">
          <LandingPage />
        </div>
        {screenWidth > responsiveTabletBreak && <Socials />}
        <FooterComponent />
      </main>
    </>
  )
}

export default PageLayout