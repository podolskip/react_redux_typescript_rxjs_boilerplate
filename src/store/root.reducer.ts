import {
  AnyAction,
  Reducer,
} from 'redux';
import { combineReducers } from 'redux';
import { IStore } from './store.types';

import { reducerUser } from './user';

export const rootReducer: Reducer<IStore, AnyAction> = combineReducers<IStore, AnyAction>({
  user: reducerUser,
  placesToSeeList: [],
  activeLoaders: 0
});