import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const lanuages = {
  HU: 'hu'
}

const resources = {
  [lanuages.HU]: {
    translation: require('./locales/hu.json')
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: lanuages.HU,
    fallbackLng: lanuages.HU,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
