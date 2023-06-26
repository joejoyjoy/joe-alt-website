import { useTranslation } from "react-i18next";
import './language.scss'

const lngs = [
  { code: "en", native: "EN" },
  { code: "es", native: "ES" },
];

const Language = () => {
  const { i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
    document.documentElement.setAttribute("lang", code);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => handleTrans("en")} className={i18n.language === "en" ? "lngs-switch-active" : ""}>EN</button>
      <hr />
      <button onClick={() => handleTrans("es")} className={i18n.language === "es" ? "lngs-switch-active" : ""}>ES</button>
    </div>
  )
}

export default Language;