import FetchFactory from '~/services/factory';
import { AuthModule } from '~/services/modules';

export default defineNuxtPlugin((nuxtApp) => {
  const API_SERVICE = new FetchFactory(nuxtApp.$config.public.apiHost, 10000);

  const modules = {
    auth: AuthModule(API_SERVICE)
  };

  return {
    provide: {
      apiService: modules
    }
  };
});
