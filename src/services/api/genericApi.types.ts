export type MethodsAPI = 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export class BaseHeaders {
  public 'Accept': string;
  public 'Content-Type': string;
  public 'observe': string;
}

export type TokenOptions = 'token' | 'no-token' | 'only-token' ;

export enum TokenOptionsEnum {
  token = 'token',
  noToken = 'no-token',
  onlyToken = 'only-token',
}