import {
  BaseHeaders,
  TokenOptions,
  TokenOptionsEnum
} from './genericApi.types';

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
