import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import App from './App.vue'

const i18n = createI18n({
  locale: window.navigator.language.substr(0, 2),
  fallbackLocale: 'en',
})

createApp(App).use(i18n).mount('#app')
