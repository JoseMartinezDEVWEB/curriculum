import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'img/**/*', dest: 'img' },
        { src: 'Santa Isabel Adon Vallejo02.pdf', dest: '' }
      ]
    })
  ],
  server: {
    open: true
  }
})
