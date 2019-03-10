// tslint:disable:object-literal-sort-keys
import {
  AnyAction,
  Reducer,
} from 'redux';
import { combineReducers } from 'redux';
import { IState } from 'src/store/store.types';

import { reducerLoaders } from './loaders';
import { reducerPlacesToSeeList } from './placesToSeeList';
import { reducerUser } from './user';

export const rootReducer: Reducer<IState, AnyAction> = combineReducers<IState, AnyAction>({
  user: reducerUser,
  placesToSeeList: reducerPlacesToSeeList,
  activeLoaders: reducerLoaders,
});