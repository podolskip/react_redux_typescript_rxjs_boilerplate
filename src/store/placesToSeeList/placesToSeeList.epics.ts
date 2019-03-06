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
import * as PlacesTypes from './placesToSeeList.types';
// Types
import { IState, IReduxAction } from 'src/store/store.types';

export const placesToSeeEpic: Epic = (
  action$: ActionsObservable<IReduxAction>,
  state$: StateObservable<IState>
) =>
  action$
    .pipe(
      ofType(PlacesTypes.PLACES_TO_SEE_REQUEST),
      // tslint:disable-next-line:no-console
      tap(action => console.log(PlacesTypes, state$)),
      ignoreElements()
    ); 