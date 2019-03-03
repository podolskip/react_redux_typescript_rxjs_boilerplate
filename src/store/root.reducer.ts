// tslint:disable:object-literal-sort-keys
import {
  AnyAction,
  Reducer,
} from 'redux';
import { combineReducers } from 'redux';
import { IStore } from './store.types';

import { reducerLoaders } from './loaders';
import { reducerPlacesToSeeList } from './placesToSeeList';
import { reducerUser } from './user';

export const rootReducer: Reducer<IStore, AnyAction> = combineReducers<IStore, AnyAction>({
  user: reducerUser,
  placesToSeeList: reducerPlacesToSeeList,
  activeLoaders: reducerLoaders
});