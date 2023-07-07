import { useTranslation } from 'react-i18next'
import EmailJSForm from "@/views/UI/emailJSForm";
import './contactSection.scss'

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contactLink" className="contact-section">
      <div className="contact-section__container">
        <h3 className="contact-section__container--header">{t("contactSection_header")}</h3>
        <h2 className="contact-section__container--title">{t("contactSection_title")}</h2>
        <p className="contact-section__container--text">{t("contactSection_text")}</p>
      </div>
      <EmailJSForm />
    </section>
  );
};

export default ContactSection;