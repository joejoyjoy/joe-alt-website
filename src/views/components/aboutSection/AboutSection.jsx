import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Portrait from '@/assets/IMG/webp/portraitJoe.webp'
import { SlLocationPin } from 'react-icons/sl'
import './aboutSection.scss'

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="aboutLink" className="about-section">
      <div className="about-section__content">
        <div className="about-section__content--header">
          <span>01. </span><h2>{t("aboutSection_header")}</h2>
        </div>
        <div className="about-section__content--body">
          <span>
            <Trans i18nKey="aboutSection_body_span1" components={{ bold: <b /> }} />
          </span>
          <span>
            <Trans i18nKey="aboutSection_body_span2" components={{ bold: <b />, aTag: <a href="https://assemblerinstitute.com" className="marked" target="_blank" /> }} />
          </span>
          <span>
            <Trans i18nKey="aboutSection_body_span3" components={{ bold: <b /> }} />
          </span>
          <span>
            {t("aboutSection_body_span4")}
          </span>
          <ul className="about-section__content--body__skills-list">
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>TypeScript</li>
            <li>MySQL</li>
            <li>SASS</li>
            <li>PHP</li>
            <li>Wix</li>
            <li>Jest Testing</li>
          </ul>
        </div>
      </div>
      <div className="about-section__image">
        <div className="about-section__image--wrapper">
          <img src={Portrait} alt={t("aboutSection_image_alt") || "image"} className="about-section__image--wrapper__content" />
          <span className="about-section__image--wrapper__location"><SlLocationPin />{t("aboutSection_image_location")}</span>
        </div>
      </div>
    </section>
  )
}

export default AboutSection