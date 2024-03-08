import type { NuxtI18nOptions } from '@nuxtjs/i18n/dist/module';
import { LANGUAGE_CODE } from './shared/constants/LanguageCode';

const i18nConfig: NuxtI18nOptions = {
  defaultLocale: LANGUAGE_CODE.EN,
  locales: [
    {
      name: 'English',
      code: LANGUAGE_CODE.EN,
      file: 'en.json',
      iso: 'en-US',
      flag: 'en-language-flag'
    },
    {
      name: 'Español',
      code: LANGUAGE_CODE.ES,
      file: 'es.json',
      iso: 'es-ES',
      flag: 'es-language-flag'
    }
  ],
  strategy: 'prefix_except_default',
  lazy: false,
  langDir: 'shared/localization/locales/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'locale',
    redirectOn: 'root' // recommended
  }
};

export default i18nConfig;
