import {
  // map, switchMap, filter,
  tap,
  ignoreElements
} from 'rxjs/operators';
import {
  ofType,
  ActionsObservable,
  StateObservable,
  Epic,
} from 'redux-observable';
import * as typ from './errorHandler.types';
// Types
import { IState, IReduxAction } from 'src/store/store.types';
import GenericApi from 'src/services/api/genericApi';


export const throwErrorEpic: Epic = (
  action$: ActionsObservable<IReduxAction>,
  state$: StateObservable<IState>,
  genericApiService: GenericApi,
) =>
  action$
  .pipe(
    ofType(typ.THROW_ERROR),
    // tslint:disable:no-console
    tap(action => {
      console.log(typ.THROW_ERROR, state$);
    }),
    ignoreElements()
  );