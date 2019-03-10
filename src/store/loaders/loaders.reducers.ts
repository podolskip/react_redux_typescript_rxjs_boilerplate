import { Reducer } from 'redux';
import { IReduxAction } from '../store.types';

export const reducerLoaders: Reducer<number> = (
  state: number = 0,
  action: IReduxAction
): number => {
  if (state === 0) { return state; }

  if (action.isLoading) { return state + 1; }

  if (!action.isLoading) { return state - 1; }

  return state;
};