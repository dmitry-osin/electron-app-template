import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        entry: 'src/app/main.js',
        onstart(options) {
          // Don't start Electron automatically in dev mode
          console.log('[startup] Electron App - waiting for manual start')
        },
        vite: {
          build: {
            outDir: 'dist/app',
            rollupOptions: {
              external: ['electron']
            }
          }
        }
      },
      {
        entry: 'src/app/preload.js',
        onstart(options) {
          // Don't start Electron automatically in dev mode
          console.log('[startup] Preload - waiting for manual start')
        },
        vite: {
          build: {
            outDir: 'dist/app',
            rollupOptions: {
              external: ['electron']
            }
          }
        }
      }
    ]),
    renderer()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@ui': resolve(__dirname, 'src/ui'),
      '@app': resolve(__dirname, 'src/app'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  build: {
    outDir: 'dist/ui',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
}) 