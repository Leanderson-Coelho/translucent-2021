import Game from '../../model/Game';
import {
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
  FETCH_GAMES,
  ADD_GAME,
  ADD_GAME_SUCCESS,
  ADD_GAME_FAIL,
  CLEAR_STATUS_GAME,
} from './actionTypes';

export interface State {
  data: Game[];
  loading: boolean;
  success: boolean;
  errorFetch: [];
  errorAdd: [];
  coldList: boolean;
}

export const initialState: State = {
  data: [],
  loading: false,
  success: false,
  errorFetch: [],
  errorAdd: [],
  coldList: true,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        loading: true,
        coldList: false,
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_GAMES_FAIL:
      return {
        ...state,
        errorFetch: action.payload,
        loading: false,
      };
    case ADD_GAME:
      return {
        ...state,
        loading: true,
        errorAdd: [],
      };
    case ADD_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: [...state.data, action.payload],
      };
    case ADD_GAME_FAIL:
      return {
        ...state,
        loading: false,
        errorAdd: action.payload,
      };
    case CLEAR_STATUS_GAME:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default reducer;

// [
//   {
//     id: 'asd0sa8d0',
//     title: 'Com o Redux',
//     year: DateTime.fromISO('2011-01-01'),
//     console: 'PS2',
//     completionDate: DateTime.fromISO(new Date().toISOString()),
//     notes: 'I really liked this game. A masterpiece from Kojima productions.',
//     completed: true,
//   },
//   {
//     id: 'asd0sa8d1',
//     title: 'Marvel’s Spider-Man',
//     year: DateTime.fromISO(new Date().toISOString()),
//     console: 'PS4',
//     completionDate: DateTime.fromISO('2017-08-07'),
//     notes:
//       'Using tokens rewarded from objectives,
// Spider-Man can unlock and craft new gadgets, suits, and Suit Mods',
//     completed: true,
//   },
//   {
//     id: 'asd0sa8d2',
//     title: 'Super Mario Bros.',
//     year: DateTime.fromISO('1985-09-13'),
//     console: 'NINTENDO',
//     notes:
//       'In the game, Mario must race through the Mushroom Kingdom
// and save Princess Toadstool (later Princess Peach) from Bowser.',
//     completed: false,
//   },
// ]
