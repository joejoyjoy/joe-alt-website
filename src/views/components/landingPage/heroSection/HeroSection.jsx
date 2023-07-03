import React from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import './heroSection.scss'

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="heroLink" className="hero-section">
      <p className="hero-section__welcome">{t("heroSection_welcome")}</p>
      <h1 className="hero-section__name">Joe Alt.</h1>
      <h2 className="hero-section__position">Full Stack web developer.</h2>
      <p className="hero-section__description">{t("heroSection_description")}</p>
      <span className="hero-section__btns">
        <Link to="contactLink" smooth={true} duration={1200} className="hero-section__btns--action">{t("heroSection_btns_action")}</Link>
        <button className="hero-section__btns--download">{t("heroSection_btns_download")}</button>
      </span>
    </section>
  )
}

export default HeroSection