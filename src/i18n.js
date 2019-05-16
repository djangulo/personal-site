import i18n from 'i18next';
import Backend from 'i18next-chained-backend';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [XHR],
      backendOptions: [
        {
          // FileSystemBackend Options
          loadPath: '/locales/{{lng}}/{{ns}}.json',
          addPath: '/locales/{{lng}}/{{ns}}.missing.json'
        }
      ]
    },
    fallbackLng: 'en',
    saveMissing: true,
    whitelist: ['en', 'es'],
    load: ['en', 'es'],
    preload: ['en', 'es'],
    ns: ['translation', 'home'],
    returnObjects: true,
    defaultNS: 'translation',
    saveMissingTo: 'fallback',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
