import { Epic } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { placesToSeeEpic } from './placesToSeeList';
import { fetchUserInformationEpic } from './user';
import { throwErrorEpic } from './errorHandler';

const rootEpic: Epic = combineEpics(
  // ...Object.values(UserEpics),  // not supported with IE
  // ...Object.values(PlacesEpics) // not supported with IE
  placesToSeeEpic,
  fetchUserInformationEpic,
  throwErrorEpic
);

export default rootEpic;