import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// biome-ignore lint/style/noDefaultExport: vite require default export
export default defineConfig({
  plugins: [react()],
})
