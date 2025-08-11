const { contextBridge, ipcRenderer } = require('electron')

// Export API for renderer
contextBridge.exposeInMainWorld('electronAPI', {
  // Get application information
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  getAppName: () => ipcRenderer.invoke('get-app-name'),
  getProcessVersions: () => ipcRenderer.invoke('get-process-versions'),
  
  // Show messages
  showMessage: (message) => ipcRenderer.invoke('show-message', message),
  
  // Open external links
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  
  // Event listeners
  onMenuAction: (callback) => {
    ipcRenderer.on('menu-action', (event, action) => callback(action))
  },
  
  onGlobalShortcut: (callback) => {
    ipcRenderer.on('global-shortcut', (event, shortcut) => callback(shortcut))
  },
  
  // Remove listeners
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel)
  }
})

// Error handling
window.addEventListener('error', (event) => {
  console.error('Preload error:', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
}) 