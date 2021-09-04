import { fetchGamesSuccess, fetchGamesFail } from './actionCreators';
import Game from '../../model/Game';
import { call, put, takeLatest } from 'redux-saga/effects';
import GameService from '../../services/gameService';
import { FETCH_GAMES } from './actionTypes';

function* fetchGames() {
  try {
    const games: Game[] = yield call(GameService.fetchGames);
    yield put(fetchGamesSuccess(games));
  } catch (error: any) {
    console.warn('Error on fetch games', error.response.data.errors);
    yield put(fetchGamesFail(error.response.data.errors));
  }
}

const gamesSagas = [takeLatest(FETCH_GAMES, fetchGames)];

export default gamesSagas;
