import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import englishTranslation from '@/assets/locale/en';
import spanishTranslation from '@/assets/locale/es';

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: englishTranslation
      },
      es: {
        translation: spanishTranslation
      },
    }
  });

export default i18n;