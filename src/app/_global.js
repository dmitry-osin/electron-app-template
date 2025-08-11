const electronSettings = require('electron-settings')

// Global app settings
const DEFAULT_SETTINGS = {
  theme: 'light',
  language: 'en',
  window: {
    width: 1200,
    height: 800,
    x: undefined,
    y: undefined
  },
  shortcuts: {
    devTools: 'CommandOrControl+Shift+I',
    reload: 'CommandOrControl+Shift+R',
    newWindow: 'CommandOrControl+Shift+N'
  },
  features: {
    autoSave: true,
    notifications: true,
    sound: false
  }
}

// Initialize settings
function initializeSettings() {
  // Set default values if they don't exist
  Object.keys(DEFAULT_SETTINGS).forEach(key => {
    if (!electronSettings.has(key)) {
      electronSettings.set(key, DEFAULT_SETTINGS[key])
    }
  })
}

// Get setting
function getSetting(key, defaultValue = null) {
  return electronSettings.get(key, defaultValue)
}

// Set setting
function setSetting(key, value) {
  electronSettings.set(key, value)
}

// Get all settings
function getAllSettings() {
  return electronSettings.get()
}

// Reset settings to default values
function resetSettings() {
  Object.keys(DEFAULT_SETTINGS).forEach(key => {
    electronSettings.set(key, DEFAULT_SETTINGS[key])
  })
}

// Export functions
module.exports = {
  initializeSettings,
  getSetting,
  setSetting,
  getAllSettings,
  resetSettings,
  DEFAULT_SETTINGS
} 