import { useState } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import PdfViewer from '@/views/UI/pdfViewer/PdfViewer'
import './heroSection.scss'

const HeroSection = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="heroLink" className="hero-section">
        <p className="hero-section__welcome">{t("heroSection_welcome")}</p>
        <h1 className="hero-section__title">
          <span className="hero-section__title--name">Joe Alt.</span>
          <span className="hero-section__title--position">{t("heroSection_position")}</span>
        </h1>
        <p className="hero-section__description">{t("heroSection_description")}</p>
        <span className="hero-section__btns">
          <Link to="contactLink" smooth={true} duration={1200} href="\" className="hero-section__btns--action">{t("heroSection_btns_action")}</Link>
          <button onClick={() => setOpen(true)} className="hero-section__btns--download">{t("heroSection_btns_download")}</button>
        </span>
      </section>
      <PdfViewer open={open} setOpen={setOpen} />
    </>
  )
}

export default HeroSection