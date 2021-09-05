/* eslint-disable no-unused-vars */
// Theme Reducer

import { CHANGE_THEME } from './actionTypes';

export const LIGHT_TYPE = 'LIGHT';
export const DARK_TYPE = 'DARK';

interface State {
  themeConfig: String;
}

const initialState: State = {
  themeConfig: LIGHT_TYPE,
};

const themeReducer = (state = initialState, action: any): State => {
  if (action.type === CHANGE_THEME) {
    return state.themeConfig === LIGHT_TYPE
      ? { ...state, themeConfig: DARK_TYPE }
      : { ...state, themeConfig: LIGHT_TYPE };
  }
  return state;
};

export default themeReducer;
