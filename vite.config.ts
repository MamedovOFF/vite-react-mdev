import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src/'),
      },
    ],
    extensions: ['.tsx', '.ts', '.jsx', '.js', 'mts', 'mjs', 'json'],
  },
})
