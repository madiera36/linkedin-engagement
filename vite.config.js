import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: replace REPO_NAME with your repo (e.g., 'linkedin-scraper-react')
export default defineConfig({
  plugins: [react()],
  base: '/linkedin-engagement/',
})
