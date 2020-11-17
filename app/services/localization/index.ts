import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './languages';

i18n.use(initReactI18next).init({
  resources: { en },
});

export default i18n;
