import { CHANGE_LOCATION } from './actionTypes';

export const changeLocation = (location: String) => ({
  type: CHANGE_LOCATION,
  payload: location,
});
