import { Epic } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { placesToSeeEpic } from './placesToSeeList/placesToSeeList.epics';
import { fetchUserInformationEpic } from './user/user.epics';

const rootEpic: Epic = combineEpics(
  // ...Object.values(UserEpics),  // not supported with IE
  // ...Object.values(PlacesEpics) // not supported with IE
  placesToSeeEpic,
  fetchUserInformationEpic
);

export default rootEpic;