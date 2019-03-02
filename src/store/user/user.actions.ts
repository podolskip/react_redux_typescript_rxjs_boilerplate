import * as StoreTypes from '../store.types';
import * as UserTypes from './user.types';
// tslint:disable: object-literal-sort-keys

export const fetchUserInformation = (
  payload: StoreTypes.IUserAuthentication
): StoreTypes.IReduxAction<StoreTypes.IUserAuthentication> => ({
  type: UserTypes.USER_INFORMATION_REQUEST,
  payload,
});

export const fetchUserInformationFinished = (
  payload: StoreTypes.IUser
): StoreTypes.IReduxAction<StoreTypes.IUser> => ({
  type: UserTypes.USER_INFORMATION_SUCCESS,
  payload
});