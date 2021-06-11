import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './translation.en.json';
import translationJa from './translation.ja.json';
import translationKo from './translation.ko.json';
import translationZh from './translation.zh.json';

const resource = {
    en: {
        translation: translationEn
    },
    ja: {
        translation: translationJa
    },
    ko: {
        translation: translationKo
    },
    zh: {
        translation: translationZh
    }
};
i18n.use(initReactI18next).init({
    resources: resource,
    lng: "ko",
    fallbackLng: "ko",
    debug: true,
    keySeparator: false,
    interpolation: {escapeValue: false}
});

export default i18n;