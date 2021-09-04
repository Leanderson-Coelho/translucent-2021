import Game from '../../model/Game';
import {
  FETCH_GAMES,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
  ADD_GAME,
  ADD_GAME_SUCCESS,
  ADD_GAME_FAIL,
  CLEAR_STATUS_GAME,
} from './actionTypes';

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const fetchGamesSuccess = (games: Game[]) => ({
  type: FETCH_GAMES_SUCCESS,
  payload: games,
});

export const fetchGamesFail = (error: any) => ({
  type: FETCH_GAMES_FAIL,
  payload: error,
});

export const addGame = (game: any) => ({
  type: ADD_GAME,
  payload: game,
});

export const addGameSuccess = (gameSuccess: Game) => ({
  type: ADD_GAME_SUCCESS,
  payload: gameSuccess,
});

export const addGameFail = (error: any) => ({
  type: ADD_GAME_FAIL,
  payload: error,
});

export const clearStatusGame = () => ({
  type: CLEAR_STATUS_GAME,
});
