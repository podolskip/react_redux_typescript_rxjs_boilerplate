import { IReduxAction } from '../store.types';
import * as PlacesTypes from './placesToSeeList.types';


export const fetchPlacesToSee = (): IReduxAction => ({
  type: PlacesTypes.PLACES_TO_SEE_REQUEST
});