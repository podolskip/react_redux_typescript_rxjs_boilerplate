import { Action } from 'redux';
export type Optional<T> = T | undefined;

export interface IReduxAction<T = undefined> extends Action<string> {
  payload?: T;
  [key: string]: any;
};

export interface IUserAuthentication {
  userName: string;
  password: string;
};

export interface IUser {
  name: string;
  surname: string;
  email: string;
};

export interface ISinglePlaceToSee {
  placesName: string;
  seeBefore: string | Date;
};

export interface IStore {
  user: Optional<IUser>;
  placesToSeeList: ISinglePlaceToSee[];
  activeLoaders: number
};