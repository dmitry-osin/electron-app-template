# Electron App Template

A modern Electron application built with Vite, React, Ant Design and other cutting-edge technologies.

## 🚀 Technologies

- **Electron** - Framework for building native applications
- **Vite** - Fast build tool
- **React** - Library for building user interfaces
- **Ant Design** - UI component library
- **Styled Components** - CSS-in-JS solution
- **Electron Settings** - Application settings management

## 📁 Project Structure

```
src/
├── app/                 # Electron process
│   ├── main.js         # Main process
│   ├── preload.js      # Preload script
│   ├── _global.js      # Global settings
│   └── bootstrapper.js # Application initialization
├── ui/                 # React application
│   ├── components/     # React components
│   ├── main.jsx       # React entry point
│   ├── App.jsx        # Main component
│   └── index.css      # Global styles
└── assets/             # Static resources
```

## 🛠️ Installation and Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Development

```bash
# Start in development mode
npm run dev
# or
yarn dev

# Or separately:
npm run dev:vite      # Start Vite dev server
npm run dev:electron  # Start Electron
```

### Build

```bash
# Build React application
npm run build

# Build Electron application
npm run build:electron
```

## ⌨️ Hotkeys

- `Ctrl+Shift+I` - Open/close DevTools
- `Ctrl+Shift+R` - Reload application
- `Ctrl+Shift+N` - Create new window
- `Ctrl+N` - New file
- `Ctrl+O` - Open file
- `Ctrl+S` - Save file

## ⚙️ Settings

The application supports settings through `electron-settings`:

- Theme (light/dark/auto)
- Interface language
- Window dimensions
- Auto-save
- Notifications
- Sound effects

## 🔧 Configuration

### Vite

Configuration is located in `vite.config.js` and includes:

- Electron support
- Import aliases
- Hot Module Replacement
- Build optimization

### Electron

Main configuration in `src/app/main.js`:

- Window creation
- Hotkey registration
- IPC communication
- Application menu

## 📦 Production Build

```bash
# Build all parts
npm run build:electron

# Result will be in the dist/ folder
```

## 🐛 Debugging

1. **Development mode**: DevTools automatically open
2. **Logs**: Check Electron and browser console
3. **Hot Reload**: Changes in React code automatically update
4. **Electron Reload**: Changes in main process require restart

## 📝 Scripts

- `npm run dev` - Start in development mode
- `npm run build` - Build React application
- `npm run build:electron` - Full Electron build
- `npm run preview` - Preview build
- `npm run electron` - Start Electron only

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Create a Pull Request

## 👨‍💻 Author

**Dmitry Osin** - [d@osin.pro](mailto:d@osin.pro)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 