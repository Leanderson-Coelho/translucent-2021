import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import syncLocalStorageReducer from './syncLocalStorageReducer';

const store = createStore(syncLocalStorageReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;

export default store;
