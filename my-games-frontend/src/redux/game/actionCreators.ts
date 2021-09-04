import Game from '../../model/Game';
import {
  FETCH_GAMES,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
} from './actionTypes';

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const fetchGamesSuccess = (games: Game[]) => ({
  type: FETCH_GAMES_SUCCESS,
  payload: games,
});

export const fetchGamesFail = (error: String) => ({
  type: FETCH_GAMES_FAIL,
  payload: error,
});
