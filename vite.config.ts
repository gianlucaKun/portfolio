// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio' // Sostituisci 'nome-del-repository' con il nome del tuo repository GitHub
});
