import { useState, useEffect, Suspense, useContext } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import useScrollDirection from '@/hooks/useScrollDirection'
import useScrollPosition from '@/hooks/useScrollPosition'
import useWindowSizeReport from '@/hooks/useWindowSizeReport'
import { responsiveDesktopBreak } from '@/utils/componentsConstants'
import { SiteContext } from '@/context/SiteContext'
import MobileNavMenu from '../mobile/mobileNavMenu'
import NavBurger from '@/views/UI/navBurger'
import Language from '@/views/UI/language'
import WebsiteLogo from '@/assets/SVG/WebsiteLogo'
import './navBarComponent.scss'

export default function NavBarComponent() {
  const screenWidth = useWindowSizeReport();

  return (
    <Suspense fallback={<></>}>
      {(screenWidth > responsiveDesktopBreak) ? (
        <NavBarDesktop />
      ) : (
        <NavBarMobile />
      )}
    </Suspense>
  )
}

const NavBarDesktop = () => {
  const { t } = useTranslation();
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();

  const headerState = () => {
    if (scrollPosition < 50) {
      return "no-shadow-header";
    }

    if (scrollDirection === "down") {
      return "hide-header";
    }

    if (scrollDirection === "up") {
      return "show-header";
    }
  }

  return (
    <header className={`nav-bar-desktop-component ${headerState()}`}>
      <Link to="heroLink" smooth={true} duration={500} href="\" className="nav-bar-desktop-component__logo">
        <WebsiteLogo />
      </Link>
      <nav className="nav-bar-desktop-component__navigation">
        <Link to="aboutLink" smooth={true} offset={-5} duration={500} href="\" className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">01. </span>{t("header_nav_link1") || "link"}</p>
        </Link>
        <Link to="experienceLink" smooth={true} offset={-5} duration={500} href="\" className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">02. </span>{t("header_nav_link2") || "link"}</p>
        </Link>
        <Link to="workLink" smooth={true} offset={-5} duration={500} href="\" className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">03. </span>{t("header_nav_link3") || "link"}</p>
        </Link>
        <Link to="reviewsLink" smooth={true} offset={-5} duration={500} href="\" className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">04. </span>{t("header_nav_link4") || "link"}</p>
        </Link>
        <Link to="contactLink" smooth={true} offset={-5} duration={500} href="\" className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">05. </span>{t("header_nav_link5") || "link"}</p>
        </Link>
        <Language />
        <Link to="contactLink" smooth={true} offset={-5} duration={500} href="\" className="nav-bar-desktop-component__navigation--link">
          <button>{t("header_nav_action") || "button"}</button>
        </Link>
      </nav>
    </header>
  )
}

const NavBarMobile = () => {
  const { t } = useTranslation();
  const { menuToggle, handleToggle } = useContext(SiteContext);
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  const [handleClick, setHandleClick] = useState(false)

  const headerState = () => {
    if (scrollPosition < 50 || menuToggle) {
      return "no-shadow-header";
    }

    if (scrollDirection === "up" && !handleClick) {
      return "show-header";
    }

    if (scrollDirection === "up" && handleClick) {
      return "hide-header";
    }

    return "hide-header";
  }

  useEffect(() => {
    if (handleClick === true) {
      setTimeout(() => {
        setHandleClick(false)
      }, 350);
    }
  }, [scrollPosition])

  return (
    <>
      <header className={`nav-bar-mobile-component ${headerState()}`}>
        <Link to="heroLink" smooth={true} duration={500} offset={-172} href="\" className="nav-bar-mobile-component__logo">
          <WebsiteLogo />
        </Link>
      </header>
      <span onClick={() => handleToggle()} className={`nav-bar-mobile-component-btn ${headerState()}`}>
        <NavBurger />
      </span>
      <MobileNavMenu state={setHandleClick} />
    </>
  )
}
