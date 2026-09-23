// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://algomass.github.io',
  base: '/portfolio', // <-- Inserisci qui il nome esatto della tua repo
  vite: {
    plugins: [tailwindcss()]
  }
});