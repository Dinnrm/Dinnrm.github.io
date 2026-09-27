import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dinnrm.github.io 是用户站，部署在域名根路径
export default defineConfig({
  plugins: [react()],
  base: '/',
})
