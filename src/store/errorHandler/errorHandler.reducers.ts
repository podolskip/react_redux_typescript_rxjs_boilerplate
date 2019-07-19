import { THROW_ERROR } from './errorHandler.types';
import { IReduxAction } from 'src/store/store.types';

export const throwErrorReducer = (
  state: boolean = false,
  action: IReduxAction<boolean>
) => {
  switch(action.type) {
    case THROW_ERROR:
      return true;
    default:
      return state;
  }
};