import axios from 'axios';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/internal/operators/catchError';
import { createHeadersWithToken } from './genericApi.helpers';
import { TokenOptionsEnum, MethodsAPI } from './genericApi.types';

export default class GenericApi {
  public serviceUrl: string;
  public timeout: number;

  public HeadersWithNoCache = {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
  };

  constructor(url: string, timeout: number) {
    this.serviceUrl = url;
    this.timeout = timeout;
  }

  public get (
    route: string,
    userToken: string = (window as any).appsAccessToken,
    responseType: string = 'json',
  ) {
    return axios({
      method: 'get',
      url: this.serviceUrl + route,
      responseType,
      headers: userToken
        ? createHeadersWithToken(userToken, this.HeadersWithNoCache )
        : createHeadersWithToken(TokenOptionsEnum.noToken, this.HeadersWithNoCache ),
    })
    .then(response => response)
    .catch(err => ({
      type: 'API_ERROR',
      payload: err,
    }));
  }

  public sendFile(
    route: string,
    formData: FormData,
    userToken: string = (window as any).appsAccessToken,
    responseType: string = 'json',
  ) {
    return axios({
      method: 'POST',
      data: formData,
      url: this.serviceUrl + route,
      responseType,
      headers: userToken
        ? createHeadersWithToken(userToken, this.HeadersWithNoCache )
        : createHeadersWithToken(TokenOptionsEnum.noToken, this.HeadersWithNoCache ),
    })
    // .then(response => response)
    .catch(err => ({
      type: 'API_ERROR',
      payload: err,
    }));
  }

  public getJSON<T>(
    route: string,
    userToken: string = (window as any).appsAccessToken
    ) {
      return ajax
      .getJSON(
        this.serviceUrl + route,
        userToken
        ? createHeadersWithToken(userToken, this.HeadersWithNoCache )
        : createHeadersWithToken(TokenOptionsEnum.noToken, this.HeadersWithNoCache )
      )
      .pipe(
        // will be removed in future dev
        // tslint:disable:no-console
        catchError(err => of(() => ({
          type: 'API_ERROR',
          payload: err,
        })))
        )
        ;
      }

  public modifyAPI<T extends{}> (
    route: string,
    method: MethodsAPI,
    requestBody?: T,
    userToken: string = (window as any).appsAccessToken
  ) {
    return ajax({
      body: requestBody ? JSON.stringify(requestBody!) : {},
      method,
      url: this.serviceUrl + route,
      headers: userToken
      ? createHeadersWithToken(userToken, this.HeadersWithNoCache )
      : createHeadersWithToken(TokenOptionsEnum.noToken, this.HeadersWithNoCache ),
    })
    .pipe(
      catchError(err => of(() => ({
        type: 'API_ERROR',
        payload: err,
      })))
    );
  }

}