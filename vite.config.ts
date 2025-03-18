import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Eurovision-Carousel/',
  plugins: [react()],
})
