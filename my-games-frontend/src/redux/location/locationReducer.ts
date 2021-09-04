import { CHANGE_LOCATION } from './actionTypes';

export interface State {
  data: String;
}

const initialState: State = {
  data: 'fr-CA',
};

const reducer = (state = initialState, action: any) => {
  console.log('locationReducer', action);
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
