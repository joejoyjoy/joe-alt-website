import React from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import Language from '@/views/UI'
import Logo from '@/assets/logo.jpg'
import './navBarComponent.scss'

const NavBarComponent = () => {
  const { t } = useTranslation();

  return (
    <header className="nav-bar-component">
      <div className="nav-bar-component__logo">
        <img src={Logo} alt={t("header_logo_alt") || ""} />
      </div>
      <nav className="nav-bar-component__navigation">
        <Link className="nav-bar-component__navigation--link">
          <p><span className="highlighted">01. </span>{t("header_nav_link1") || ""}</p>
        </Link>
        <Link className="nav-bar-component__navigation--link">
          <p><span className="highlighted">02. </span>{t("header_nav_link2") || ""}</p>
        </Link>
        <Link className="nav-bar-component__navigation--link">
          <p><span className="highlighted">03. </span>{t("header_nav_link3") || ""}</p>
        </Link>
        <Link className="nav-bar-component__navigation--link">
          <p><span className="highlighted">04. </span>{t("header_nav_link4") || ""}</p>
        </Link>
        <Language />
        <div className="nav-bar-component__navigation--link">
          <button>{t("header_nav_action") || ""}</button>
        </div>
      </nav>
    </header>
  )
}

export default NavBarComponent