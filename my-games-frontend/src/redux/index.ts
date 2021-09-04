import { combineReducers, createStore } from 'redux';
import gameReducer from './game/gameReducer';
import themeReducer from './theme/themeReducer';
import locationReducer from './location/locationReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    game: gameReducer,
    theme: themeReducer,
    location: locationReducer,
  }),
  composeWithDevTools(),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
