import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/02-ignite-timer/',
  plugins: [react()],
})
