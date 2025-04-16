import { useThemeStore } from '~/store/theme'
import { watch } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const themeStore = useThemeStore()

  // Initialize by loading the theme from localStorage (or 'backend' in the future)
  themeStore.loadTheme()
  applyTheme(themeStore.currentTheme)

  // Watch for changes in the theme state and apply them dynamically
  watch(
    () => themeStore.currentTheme,
    (newTheme) => {
      applyTheme(newTheme)
    }
  )
})

// Helper function to add/remove the 'dark' class on the root element
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
