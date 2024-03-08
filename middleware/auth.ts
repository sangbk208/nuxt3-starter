import { PATH_AUTH } from '~/shared/constants/Path';

export default defineNuxtRouteMiddleware((to, _from) => {
  const { isLoggedIn } = useAuth();

  const isAuthRoute =
    isValidString(to.name) && Object.values(PATH_AUTH).includes(`/${to.name?.split('___')[0]}`);

  if (isAuthRoute && !isLoggedIn) return navigateTo('/');
});
