import {
  Epic,
  ofType,
  ActionsObservable,
  StateObservable,
} from 'redux-observable';
import {
  debounceTime,
  switchMap,
  map,
  // tap,
} from 'rxjs/operators';
import { from } from 'rxjs';
// ACTIONS
import { fetchUserInformationFinished } from './user.actions';
// TYPES
import * as UserTypes from './user.types';
import { IState, IUserAuthentication, IReduxAction } from 'src/store/store.types';
import GenericApi from 'src/services/api/genericApi';
// import { AjaxResponse } from 'rxjs/ajax';

export type AppAPI = {
  genericApiService: GenericApi;
};

export const fetchUserInformationEpic: Epic = (
  action$: ActionsObservable<IReduxAction<IUserAuthentication>>,
  state$: StateObservable<IState>,
  { genericApiService }: AppAPI
) =>
  action$
    .pipe(
      ofType(UserTypes.USER_INFORMATION_REQUEST),
      debounceTime(2000),
      // tslint:disable-next-line:no-console
      switchMap(action => (
          from( genericApiService
          .getJSON('https://randomuser.me/api/'))
          .pipe(
            map(response => {
              return fetchUserInformationFinished(response as any);
            })
          )
        )
      )
    );