// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
   srcDir: 'app/',
  plugins: ['@/plugins/theme.client.js'],
  css: ['@/assets/css/main.css'],
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/i18n',
    'nuxt-calendly',
    '@pinia/nuxt', // <-- Add Pinia here
  ],
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: { scale: 0, opacity: 0, y: 100 },
            visible: { scale: 1, opacity: 1, y: 0 },
          },
        },
      },
    },
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'ro', iso: 'ro-RO', file: 'ro.js', name: 'Romanian' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js', name: 'Russian' },
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
