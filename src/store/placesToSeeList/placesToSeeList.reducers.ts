// tslint:disable: ordered-imports
import { Reducer } from 'redux';
import * as PlacesTypes from './placesToSeeList.types';
import {
  ISinglePlaceToSee,
  IReduxAction
} from 'src/store/store.types';

export const reducerPlacesToSeeList: Reducer<ISinglePlaceToSee[]> = (
  state: ISinglePlaceToSee[] = [],
  { type, payload }: IReduxAction<ISinglePlaceToSee[]>
): ISinglePlaceToSee[] => {
  switch (type) {
    case PlacesTypes.PLACES_TO_SEE_SUCCESS:
      return { ...payload as ISinglePlaceToSee[] };
    default:
      return state;
  }
};

