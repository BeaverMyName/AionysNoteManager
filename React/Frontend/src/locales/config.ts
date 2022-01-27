import i18n from 'i18next';
import appEn from './en/app.json';
import appRu from './ru/app.json';
import noteEn from './en/note.json';
import noteRu from './ru/note.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    app: appEn,
    note: noteEn,
  },
  ru: {
    app: appRu,
    note: noteRu
  }
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  ns: ['app', 'note'],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});


export default i18n;