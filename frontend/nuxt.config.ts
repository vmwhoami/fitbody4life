// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['motion-v/nuxt', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ro', language: 'ro-RO' }
    ],
    defaultLocale: 'en',
  },
  vite: {
    plugins: [tailwindcss()],
  },
 
})
