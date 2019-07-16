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

export const baseHeaders: BaseHeaders =  {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'observe': 'response',
  // allows getting response with headers returned with BE header responses
};

export const createHeadersWithToken = (
  userToken: string | undefined ,
  additionalHeaders: any,
  tokenOption: TokenOptions = TokenOptionsEnum.token ,
  baseHeadersForAPI: BaseHeaders = baseHeaders,
) => {
  switch(tokenOption) {
    case TokenOptionsEnum.onlyToken:
      return { authorization: 'bearer ' + userToken!};
    case TokenOptionsEnum.token:
      return {
        ...baseHeadersForAPI,
        authorization: 'bearer ' + userToken!,
        ...additionalHeaders,
      };
    default:
      return {...baseHeadersForAPI, ...additionalHeaders};
  }
};
