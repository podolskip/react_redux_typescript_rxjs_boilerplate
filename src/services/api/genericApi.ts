import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/internal/operators/catchError';


export default class GenericApi {
  public url: string;
  public timeout: number;

  public HeadersWithNoCache = {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
  };

  constructor(url: string, timeout: number) {
    this.url = url;
    this.timeout = timeout;
  }

  public getJSON<T>(
    path: string,
    accessToken: string = (window as any).appsAccessToken,
  ) {
    return ajax
      .getJSON(path,this.HeadersWithNoCache)
      .pipe(
        // will be removed in future dev 
// tslint:disable:no-console
        catchError(err => console.log(err))
      )
      ;
  }

}