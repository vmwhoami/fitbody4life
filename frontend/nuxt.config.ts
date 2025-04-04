// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['motion-v/nuxt', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'ro', iso: 'ro-RO', file: 'ro.js', name: 'Romanian' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js', name: 'Russian' }
    ],
    defaultLocale: 'en',
  },
  vite: {
    plugins: [tailwindcss()],
  },
 
})
