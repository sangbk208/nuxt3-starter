import type { ILoginData, IPropfile } from '~/services/modules/auth/type';

export interface IUseAuthState {
  profile: IPropfile | null;
  isLoggedIn: boolean;
  loading: boolean;
}

export const useAuth = defineStore('useAuth', {
  state: (): IUseAuthState => ({
    isLoggedIn: false,
    loading: false,
    profile: null
  }),
  actions: {
    setIsLoggedIn(value: boolean) {
      this.isLoggedIn = value;
    },
    updateProfile(profileData: IUseAuthState['profile']) {},
    async onLogin(dataBody: ILoginData, onSuccess?: () => void) {
      const { $apiService } = useNuxtApp();
      const { runWithContext } = useNuxtApp();
      this.loading = true;
      try {
        const dataRes = await $apiService.auth.login(dataBody);
        runWithContext(() => this.updateProfile(dataRes.data));
        onSuccess && onSuccess();
        return dataRes.data;
      } catch (error) {
        console.log('error', error);
      } finally {
        this.loading = false;
      }
    }
  }
});
