const { initializeSettings, getSetting } = require('./_global')

// Initialize application
function bootstrap() {
  console.log('🚀 Starting Electron App...')
  
  try {
    // Initialize settings
    initializeSettings()
    console.log('✅ Settings initialized')
    
    // Get current theme
    const currentTheme = getSetting('theme', 'light')
    console.log(`🎨 Current theme: ${currentTheme}`)
    
    // Get window settings
    const windowSettings = getSetting('window', {})
    console.log('🪟 Window settings loaded:', windowSettings)
    
    // Get features settings
    const features = getSetting('features', {})
    console.log('⚙️ Features loaded:', features)
    
    console.log('✅ Bootstrap completed successfully')
    
    return {
      theme: currentTheme,
      window: windowSettings,
      features: features
    }
  } catch (error) {
    console.error('❌ Bootstrap failed:', error)
    throw error
  }
}

// Check environment
function checkEnvironment() {
  const isDev = process.env.NODE_ENV === 'development'
  const isProd = process.env.NODE_ENV === 'production'
  
  console.log(`🌍 Environment: ${isDev ? 'Development' : isProd ? 'Production' : 'Unknown'}`)
  console.log(`📁 Current directory: ${process.cwd()}`)
  console.log(`🔧 Node version: ${process.version}`)
  console.log(`💻 Platform: ${process.platform}`)
  
  return { isDev, isProd }
}

// Export functions
module.exports = {
  bootstrap,
  checkEnvironment
} 