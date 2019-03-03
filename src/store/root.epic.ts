import { Epic } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import * as PlacesEpics from './placesToSeeList/placesToSeeList.epics';
import * as UserEpics from './user/user.epics';

export const rootEpic: Epic = combineEpics(
  // ...Object.values(UserEpics),
  // ...Object.values(PlacesEpics)
  PlacesEpics.placesToSeeEpic,
  UserEpics.fetchUserInformationEpic
);

export default rootEpic;