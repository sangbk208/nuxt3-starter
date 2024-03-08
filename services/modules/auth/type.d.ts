export interface IPropfile {
  identifier: string;
  user_name: string;
  email: string;
}

export interface ISignUpData {
  email: string;
  user_name?: string;
  password: string;
}

export interface ILoginData {
  user_name: string;
  password: string;
}

export interface IAuthResponseData extends IResponseData {
  data: IPropfile;
}
