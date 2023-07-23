import { useState } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import PdfViewer from '@/views/UI/pdfViewer/PdfViewer'
import heroSection from '@/assets/IMG/png/heroSection.png'
import './heroSection.scss'

const HeroSection = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="heroLink" className="hero-section">
        <div className="hero-section__content">
          <p className="hero-section__content--welcome">{t("heroSection_welcome")}</p>
          <h1 className="hero-section__content--title">
            <span className="hero-section__content--title__name">Joe Alt.</span>
            <span className="hero-section__content--title__position">{t("heroSection_position")}</span>
          </h1>
          <p className="hero-section__content--description">{t("heroSection_description")}</p>
          <span className="hero-section__content--btns">
            <Link to="contactLink" smooth={true} duration={1200} offset={-25} href="\" className="hero-section__content--btns__action">{t("heroSection_btns_action")}</Link>
            <button onClick={() => setOpen(true)} className="hero-section__content--btns__download">{t("heroSection_btns_download")}</button>
          </span>
        </div>
        <div className="hero-section__picture">
          <img src={heroSection} alt="Joe Alt floating projects" className="hero-section__picture--image" />
        </div>
      </section>
      <PdfViewer open={open} setOpen={setOpen} />
    </>
  )
}

export default HeroSection