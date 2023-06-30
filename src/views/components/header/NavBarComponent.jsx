import { Suspense, useContext } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import useScrollDirection from '@/hooks/useScrollDirection'
import useScrollPosition from '@/hooks/useScrollPosition'
import useWindowSizeReport from '@/hooks/useWindowSizeReport'
import { responsiveBreak } from '@/utils/componentsConstants'
import { SiteContext } from '@/context/SiteContext'
import MobileNavMenu from '../mobile/mobileNavMenu'
import NavBurger from '@/views/UI/navBurger'
import Language from '@/views/UI/language'
import Logo from '@/assets/IMG/logo.jpg'
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
      {(screenWidth > responsiveBreak) ? (
        <NavBarDesktop func={headerState} />
      ) : (
        <NavBarMobile func={headerState} menuToggle={menuToggle} handleToggle={handleToggle} />
      )}
    </Suspense>
  )
}

const NavBarDesktop = ({ func }) => {
  const { t } = useTranslation();

  return (
    <header className={`nav-bar-desktop-component ${func()}`}>
      <div className="nav-bar-desktop-component__logo">
        <img src={Logo} alt={t("header_logo_alt") || ""} />
      </div>
      <nav className="nav-bar-desktop-component__navigation">
        <Link className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">01. </span>{t("header_nav_link1") || ""}</p>
        </Link>
        <Link className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">02. </span>{t("header_nav_link2") || ""}</p>
        </Link>
        <Link className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">03. </span>{t("header_nav_link3") || ""}</p>
        </Link>
        <Link className="nav-bar-desktop-component__navigation--link">
          <p><span className="highlighted">04. </span>{t("header_nav_link4") || ""}</p>
        </Link>
        <Language />
        <div className="nav-bar-desktop-component__navigation--link">
          <button>{t("header_nav_action") || ""}</button>
        </div>
      </nav>
    </header>
  )
}

const NavBarMobile = ({ func, menuToggle, handleToggle }) => {
  const { t } = useTranslation();

  return (
    <>
      <header className={`nav-bar-mobile-component ${func()}`}>
        <div className="nav-bar-mobile-component__logo">
          <img src={Logo} alt={t("header_logo_alt") || ""} />
        </div>
      </header>
      <span onClick={() => handleToggle()} className={`nav-bar-mobile-component-btn ${func()}`}>
        <NavBurger />
      </span>
      <MobileNavMenu />
    </>
  )
}
