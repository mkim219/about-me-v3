import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import en from '../assets/locales/en.json';
import ko from '../assets/locales/ko.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        ko: {
            translation: ko,
        },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

export default i18n;
