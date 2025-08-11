# Assets Directory

This directory contains static assets for the Electron application:

- **Images**: Icons, logos, and other image files
- **Fonts**: Custom fonts if needed
- **Other static files**: Any other static resources

## Icon Requirements

For the application icon, you can add:
- `icon.png` - Main application icon (recommended size: 512x512)
- `icon.ico` - Windows icon file
- `icon.icns` - macOS icon file

## Usage

Assets can be imported in your React components or referenced in Electron main process:

```javascript
// In React components
import logo from '@assets/logo.png'

// In Electron main process
const iconPath = path.join(__dirname, '../assets/icon.png')
``` 