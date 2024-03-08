import i18nConfig from './i18nConfig';
import nuxtConfigHelpers from './nuxt-config-helpers';

nuxtConfigHelpers.logEnv();
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/index.css'],
  modules: ['@nuxtjs/i18n', '@pinia/nuxt', '@nuxtjs/tailwindcss'],

  // Config meta tag default
  app: {
    head: {
      title: 'Nuxt3 Starter',
      charset: 'utf-8'
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  vite: {
    build: {
      // chunkSizeWarningLimit: 550
    },
    esbuild: {
      pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace']
    },
    optimizeDeps: {
      include: []
    }
  },

  // Disable pathPrefix of component auto import
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  runtimeConfig: {
    // Private keys are only available on the server
    // apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      apiHost: process.env.NUXT_PUBLIC_API_HOST || '',
      appName: nuxtConfigHelpers.appName,
      appVersion: nuxtConfigHelpers.appVersion
    }
  },

  // Auto imports module/pinia
  pinia: {
    storesDirs: ['./stores/**']
  },

  // Internationalization
  i18n: i18nConfig,

  // Nuxt devtools
  devtools: { enabled: true }
});
