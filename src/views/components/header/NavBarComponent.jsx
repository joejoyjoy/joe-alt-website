import { Suspense, useContext } from 'react'
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
import Logo from '@/assets/IMG/logo.png'
import './navBarComponent.scss'

export default function NavBarComponent() {
  const { menuToggle, handleToggle } = useContext(SiteContext);
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  const screenWidth = useWindowSizeReport();

  const headerState = () => {
    if (scrollPosition < 50 || menuToggle) {
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
    <Suspense fallback={<></>}>
      {(screenWidth > responsiveDesktopBreak) ? (
        <NavBarDesktop func={headerState} />
      ) : (
        <NavBarMobile func={headerState} handleToggle={handleToggle} />
      )}
    </Suspense>
  )
}

const NavBarDesktop = ({ func }) => {
  const { t } = useTranslation();

  return (
    <header className={`nav-bar-desktop-component ${func()}`}>
      <Link rel="noopener" to="heroLink" smooth={true} duration={500} className="nav-bar-desktop-component__logo">
        <img src={Logo} alt={t("header_logo_alt") || "image"} />
      </Link>
      <nav className="nav-bar-desktop-component__navigation">
        <Link to="aboutLink" rel="noopener" smooth={true} offset={-45} duration={500} className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">01. </span>{t("header_nav_link1") || "link"}</p>
        </Link>
        <Link className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">02. </span>{t("header_nav_link2") || "link"}</p>
        </Link>
        <Link className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">03. </span>{t("header_nav_link3") || "link"}</p>
        </Link>
        <Link rel="nofollow" to="contactLink" smooth={true} offset={-45} duration={500} className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">04. </span>{t("header_nav_link4") || "link"}</p>
        </Link>
        <Language />
        <Link to="contactLink" rel="nofollow" smooth={true} offset={-45} duration={500} className="nav-bar-desktop-component__navigation--link">
          <button>{t("header_nav_action") || "button"}</button>
        </Link>
      </nav>
    </header>
  )
}

const NavBarMobile = ({ func, handleToggle }) => {
  const { t } = useTranslation();

  return (
    <>
      <header className={`nav-bar-mobile-component ${func()}`}>
        <Link to="heroLink" smooth={true} duration={500} className="nav-bar-mobile-component__logo">
          <img src={Logo} alt={t("header_logo_alt") || "image"} />
        </Link>
      </header>
      <span onClick={() => handleToggle()} className={`nav-bar-mobile-component-btn ${func()}`}>
        <NavBurger />
      </span>
      <MobileNavMenu />
    </>
  )
}
