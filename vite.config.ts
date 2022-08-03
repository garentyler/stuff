import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Prevent Vite from obscuring Rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    strictPort: true,
  },
  // To make use of `TAURI_*` variables
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // Tauri supports ES2021
    target: ['es2021', 'chrome100', 'safari13'],
    // Don't minify debug builds
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // Produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  plugins: [ vue() ],
})
