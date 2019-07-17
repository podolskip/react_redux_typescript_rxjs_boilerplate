import {
  IReduxAction,
} from 'src/store/store.types';
import {
  THROW_ERROR
} from './errorHandler.types';

export class ThrowErrorType {
  public causeType: string;
}

export const throwError = (
  payload: ThrowErrorType
):IReduxAction<ThrowErrorType> => ({
  type: THROW_ERROR,
  payload,
});