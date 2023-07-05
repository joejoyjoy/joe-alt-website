import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { SiteContext } from '@/context/SiteContext';
import Language from '@/views/UI/language'
import './mobileNavMenu.scss'

const MobileNavMenu = () => {
  const { menuToggle, handleToggle } = useContext(SiteContext);
  const { t } = useTranslation();

  return (
    <div className={`mobile-nav-menu${menuToggle ? " mobile-nav-menu--open" : ""}`}>
      <header className="mobile-nav-menu__header">
        <span>
          <Language />
        </span>
      </header>
      <section className="mobile-nav-menu__body">
        <Link to="aboutLink" onClick={handleToggle} smooth={true} offset={65} duration={500} className="mobile-nav-menu__body--navigation__link">
          <p><span className="highlighted">01. </span>{t("header_nav_link1") || ""}</p>
        </Link>
        <Link className="mobile-nav-menu__body--navigation__link">
          <p><span className="highlighted">02. </span>{t("header_nav_link2") || ""}</p>
        </Link>
        <Link className="mobile-nav-menu__body--navigation__link">
          <p><span className="highlighted">03. </span>{t("header_nav_link3") || ""}</p>
        </Link>
        <Link to="contactLink" onClick={handleToggle} smooth={true} offset={76} duration={500} className="mobile-nav-menu__body--navigation__link">
          <p><span className="highlighted">04. </span>{t("header_nav_link4") || ""}</p>
        </Link>
        <Link to="contactLink" onClick={handleToggle} smooth={true} offset={76} duration={500} className="mobile-nav-menu__body--navigation__link">
          <button>{t("header_nav_action") || ""}</button>
        </Link>
      </section>
    </div>
  )
}

export default MobileNavMenu