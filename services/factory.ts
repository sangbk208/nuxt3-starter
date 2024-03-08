import { type FetchOptions as FetchOptionsSystem } from 'ofetch';
import type { IError } from './type';

export default class FetchFactory {
  private instance;

  constructor(baseURL: string, timeout: number) {
    this.instance = $fetch.create({
      baseURL,
      timeout,
      retry: 0,
      onRequest({ options, request }) {},
      onRequestError({ request, options, error }) {},
      onResponseError(error) {
        console.log('error', error);
      },
      onResponse(data) {}
    });
  }

  handleError(res: IError | unknown) {}

  get<T>(url: string, fetchOptions?: FetchOptionsSystem<'json'>): Promise<T> {
    return this.instance(url, {
      method: 'GET' as any,
      ...fetchOptions
    });
  }

  post<T>(url: string, fetchOptions?: FetchOptionsSystem<'json'>): Promise<T> {
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.instance(url, {
      method: 'POST' as any,
      headers,
      ...fetchOptions
    });
  }

  put<T>(url: string, fetchOptions?: FetchOptionsSystem<'json'>): Promise<T> {
    return this.instance(url, {
      method: 'PUT' as any,
      ...fetchOptions
    });
  }
}
