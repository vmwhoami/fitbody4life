import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'light', // default theme
  }),
  actions: {
    // Load stored theme from localStorage. This simulates fetching from a backend.
    loadTheme() {
      const stored = localStorage.getItem('theme')
      if (stored) {
        this.currentTheme = stored
      }
    },
    // Toggle theme and persist in localStorage
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.currentTheme)
      // You can mock a backend call here if you later want to simulate API latency:
      // updateUserThemePreference(this.currentTheme).then(() => {
      //    console.log('Theme preference saved on fake backend!')
      // });
    }
  }
})
