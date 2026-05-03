// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  build: { format: 'directory' },
  image: {
    remotePatterns: [{ hostname: 'lh3.googleusercontent.com' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
