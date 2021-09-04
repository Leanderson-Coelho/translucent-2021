import { CHANGE_BREACRUMB, CHANGE_LOCATION } from './actionTypes';

export const changeLocation = (location: String) => ({
  type: CHANGE_LOCATION,
  payload: location,
});

export const changeBreadcrumb = () => ({
  type: CHANGE_BREACRUMB,
});
