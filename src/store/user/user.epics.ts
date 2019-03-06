import {
  Epic,
  ofType,
  ActionsObservable,
  StateObservable,
} from 'redux-observable';
import {
  debounceTime,
  switchMap,
  // tap,
} from 'rxjs/operators';
// ACTIONS
import { fetchUserInformationFinished } from './user.actions';
// TYPES
import * as UserTypes from './user.types';
import { IState, IUserAuthentication, IReduxAction } from 'src/store/store.types';

export const fetchUserInformationEpic: Epic = (
  action$: ActionsObservable<IReduxAction<IUserAuthentication>>,
  state$: StateObservable<IState>
) =>
  action$
    .pipe(
      ofType(UserTypes.USER_INFORMATION_REQUEST),
      debounceTime(2000),
      // tslint:disable-next-line:no-console
      switchMap(action => (
        fetch('https://randomuser.me/api/')
          .then(res => res.json())
          .then((
            response: any
          ) => fetchUserInformationFinished(response)
          )
      )
      )
    );