import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/main.js', './src/worker.js'],
  outDir: 'dist',
  format: 'esm',
  devtools: true
})
