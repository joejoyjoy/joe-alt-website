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
      {lngs.map((lng, i) => {
        const { code, native } = lng;
        return <button key={i} onClick={() => handleTrans(code)} className={i18n.language === code ? "lngs-switch-active" : ""}>{native}</button>;
      })}
    </div>
  )
}

export default Language;