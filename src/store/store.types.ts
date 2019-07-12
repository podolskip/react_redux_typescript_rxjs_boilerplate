import { Action } from 'redux';
export type Optional<T> = T | undefined;

export interface IReduxAction<T = undefined> extends Action<string> {
  type: string;
  payload?: T;
  isLoading?: boolean;
  [key: string]: any;
}

export interface IUserAuthentication {
  userName: string;
  password: string;
}

export interface IUser {
  name: string;
  surname: string;
  email: string;
}

export interface ISinglePlaceToSee {
  placesName: string;
  seeBefore: string;
}

export interface IState {
  user: Optional<IUser>;
  placesToSeeList: ISinglePlaceToSee[];
  activeLoaders: number;
}