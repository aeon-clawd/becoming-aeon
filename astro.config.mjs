import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://become.aeoninfinitive.com',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
});
