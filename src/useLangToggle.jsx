import { useState, useEffect } from 'react';
import i18n from './i18n';

const useLanguageToggle = () => {
    const [language, setLanguage] = useState('en'); // Default language is English

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ko' : 'en';
        setLanguage(newLang);
        i18n.changeLanguage(newLang); // Change i18next language
    };

    // Sync `i18next` language with `language` state
    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return { language, toggleLanguage };
};

export default useLanguageToggle;