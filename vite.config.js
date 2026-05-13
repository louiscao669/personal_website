import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match the GitHub repo name: https://louiscao669.github.io/personal_website/
const GH_PAGES_BASE = '/personal_website/'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? GH_PAGES_BASE : '/',
}))
