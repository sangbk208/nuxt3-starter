// import { type AsyncDataOptions } from '#app';
import { type FetchOptions } from 'ofetch';
import type { IAuthResponseData, ILoginData, ISignUpData } from './type';
import { API_ENDPOINT } from '~/services/ApiEndpoint';
import type FetchFactory from '~/services/factory';
import type { IResponseData } from '~/services/type';

const AuthModule = (apiService: FetchFactory) => {
  const login = (data: ILoginData, fetchOptions?: FetchOptions<'json'>) =>
    apiService.post<IAuthResponseData>(API_ENDPOINT.auth.login, {
      body: data,
      ...fetchOptions
    });

  const signUp = (data: ISignUpData, fetchOptions?: FetchOptions<'json'>) =>
    apiService.post<IAuthResponseData>(API_ENDPOINT.auth.signUp, {
      body: data,
      ...fetchOptions
    });

  const logout = (fetchOptions?: FetchOptions<'json'>) =>
    apiService.post<IResponseData>(API_ENDPOINT.auth.logout, {
      ...fetchOptions
    });

  return {
    login,
    signUp,
    logout
  };
};

export default AuthModule;
