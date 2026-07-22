// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const site = process.env.SITE_URL
  ?? (productionUrl ? `https://${productionUrl}` : undefined)
  ?? (isGitHubPages ? 'https://junhee742.github.io' : 'http://localhost:4321');

// https://astro.build/config
export default defineConfig({
  site,
  base: isGitHubPages ? '/jun-portfolio' : undefined,
  devToolbar: {
    enabled: false,
  },
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
