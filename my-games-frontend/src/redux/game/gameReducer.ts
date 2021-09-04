import Game from '../../model/Game';
import {
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
  FETCH_GAMES,
} from './actionTypes';

export interface State {
  data: Game[];
  loading: boolean;
  errorFetch: [];
  errorAdd: [];
}

export const initialState: State = {
  data: [],
  loading: false,
  errorFetch: [],
  errorAdd: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        loading: true,
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
