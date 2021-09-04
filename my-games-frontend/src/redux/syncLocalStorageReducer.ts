import { combineReducers } from 'redux';
import LocalStorageService from '../services/localStorage';
import gameReducer, {
  initialState as gameInitialState,
} from './game/gameReducer';
import themeReducer from './theme/themeReducer';
import locationReducer from './location/locationReducer';
import {
  REDUX_STATE_SYNC,
  REDUX_STATE_SYNC_BREADCRUMB,
} from '../config/localStorageKeys';

let initialized = false;

const reducers = combineReducers({
  game: gameReducer,
  theme: themeReducer,
  location: locationReducer,
});

const breadcrumbStateToArray = (breadcrumb: Map<String, String>) =>
  Array.from(breadcrumb.entries());

const breadcrumbStateFromArrayToMap = (
  breadcrumbJson: [String, String][],
): Map<String, String> => new Map(breadcrumbJson);

const setLocalStorageState = (state: any) => {
  LocalStorageService.setItem(REDUX_STATE_SYNC, state);
};

const getLocalStorageState = () =>
  LocalStorageService.getItem(REDUX_STATE_SYNC);

const getLocalStorageBreadcrumbState = () =>
  breadcrumbStateFromArrayToMap(
    LocalStorageService.getItem(REDUX_STATE_SYNC_BREADCRUMB),
  );

const setLocalStorageBreadcrumbState = (breadcrumb: Map<String, String>) => {
  LocalStorageService.setItem(
    REDUX_STATE_SYNC_BREADCRUMB,
    breadcrumbStateToArray(breadcrumb),
  );
};

const syncLocalStorageReducer = (state: any, action: any) => {
  if (initialized) {
    // Status already started, just synchronize
    const newState = reducers(state, action);
    setLocalStorageState(newState);
    setLocalStorageBreadcrumbState(newState.location.breadcrumbs);
    return newState;
  }
  // Uninitialized State: Synchronizes
  initialized = true;
  const localStorageState = getLocalStorageState();
  const localStorageStateBreadcrumbs = getLocalStorageBreadcrumbState();
  if (localStorageState && localStorageStateBreadcrumbs) {
    // Synchronizing with stored state
    const newState = reducers(localStorageState, action);
    // Do new call
    newState.game = gameInitialState;
    newState.location.breadcrumbs = localStorageStateBreadcrumbs;
    setLocalStorageState(newState);
    return newState;
  }
  // No stored state, starting with default values
  const newState = reducers(state, action);
  setLocalStorageState(newState);
  setLocalStorageBreadcrumbState(newState.location.breadcrumbs);
  return newState;
};

export default syncLocalStorageReducer;
