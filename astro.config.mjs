import { defineConfig } from 'astro/config';
// Use Vercel Edge Functions (Recommended)
// import vercel from '@astrojs/vercel/edge';
// Can also use Serverless Functions
import vercel from '@astrojs/vercel/serverless';
// Or a completely static build
// import vercel from '@astrojs/vercel/static';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    imageService: true,
    devImageService: 'squoosh',
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    fallback: {
      en: 'es'
    },
    routing: {
      prefixDefaultLocale: false
    }
  }
});