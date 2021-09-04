import { DateTime } from 'luxon';
import {
  fetchGamesSuccess,
  fetchGamesFail,
  addGameFail,
  addGameSuccess,
} from './actionCreators';
import Game from '../../model/Game';
import GameDTO from '../../model/GameDTO';
import { call, put, takeLatest } from 'redux-saga/effects';
import GameService from '../../services/gameService';
import { ADD_GAME, FETCH_GAMES } from './actionTypes';

function* fetchGames() {
  try {
    const games: Game[] = yield call(GameService.fetchGames);
    yield put(fetchGamesSuccess(games));
  } catch (error: any) {
    if (error.response && error.response.data) {
      console.warn('Error on fetch games', error.response.data.errors);
      yield put(fetchGamesFail(error.response.data.errors));
    } else {
      console.warn('Error on fetch games', error);
      yield put(fetchGamesFail(['error.fail.on.operation.find.all']));
    }
  }
}

function* addGame(action: any) {
  try {
    const newGame: GameDTO = yield call(GameService.addGame, action.payload);
    const game = new Game(
      newGame.id,
      newGame.title,
      DateTime.fromISO(newGame.completionDate),
      newGame.console,
      DateTime.fromISO(newGame.year),
      newGame.notes,
      newGame.completed,
    );
    yield put(addGameSuccess(game));
  } catch (error: any) {
    if (error.response && error.response.data) {
      console.warn('Error on add game', error.response.data.errors);
      yield put(addGameFail(error.response.data.errors));
    } else {
      console.warn('Error on add game', error);
      yield put(addGameFail(['error.fail.on.operation.save']));
    }
  }
}

const gamesSagas = [
  takeLatest(FETCH_GAMES, fetchGames),
  takeLatest(ADD_GAME, addGame),
];

export default gamesSagas;
