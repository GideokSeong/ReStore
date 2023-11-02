import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/index.tsx', // Specify the path to your JavaScript entry file.
          },
        outDir: '../API/wwwroot'
    },
    server: {
        port: 3000
    },
    plugins: [react()],
})
