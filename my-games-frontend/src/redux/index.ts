import { combineReducers, createStore } from 'redux';
import gameReducer from './game/gameReducer';
import themeReducer from './theme/themeReducer';

const store = createStore(
  combineReducers({
    game: gameReducer,
    theme: themeReducer,
  }),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
