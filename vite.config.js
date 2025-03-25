import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, // Можно изменить порт, если стандартный занят
    open: true,  // Автоматически открывать браузер
  }
})
