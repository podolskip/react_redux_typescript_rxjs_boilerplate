import { IReduxAction, ISinglePlaceToSee } from 'src/store/store.types';
import * as PlacesTypes from './placesToSeeList.types';

export const fetchPlacesToSee = (): IReduxAction => ({
  type: PlacesTypes.PLACES_TO_SEE_REQUEST
});

export const fetchPlacesToSeeFinished = (
  payload: ISinglePlaceToSee[]
): IReduxAction<ISinglePlaceToSee[]> => ({
  payload,
  type: PlacesTypes.PLACES_TO_SEE_SUCCESS,
});