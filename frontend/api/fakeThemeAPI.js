// Simulates saving a theme setting to a backend
export function updateUserThemePreference(theme) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, theme })
      }, 500) // 500ms delay to simulate network latency
    })
  }
  