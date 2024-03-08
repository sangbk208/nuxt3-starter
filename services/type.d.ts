import { type FetchOptions } from 'ofetch';
export interface IError extends Error {
  response: {
    _data: {
      error: string;
      data: string | null;
      status: string;
    };
    status?: number;
  };
}

export type IRequestError = {
  message: string;
};

export interface IResponseData {
  status: 'SUCCESS' | 'FAILED';
  rows: number;
  error: string;
  data: object;
}

export interface IDataParams<T> {
  fetchOptions?: FetchOptions<'json'>;
}
