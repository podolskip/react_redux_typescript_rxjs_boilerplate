import { Reducer } from 'redux';
import {
  IReduxAction,
  IUser,
  IUserAuthentication,
} from '../store.types';
import * as UserTypes from './user.types';

export class User implements IUser {
  public email = '';
  public name = '';
  public surname = '';
}

export const reducerUser: Reducer<IUser> = (
  state: IUser = new User(),
  { type, payload }: IReduxAction<
    IUserAuthentication | IUser
  >
): IUser => {
  switch (type) {
    case UserTypes.USER_INFORMATION_REQUEST:
      return state;
    case UserTypes.USER_INFORMATION_SUCCESS:
      return { ...payload as IUser };
    default:
      return state;
  }
};