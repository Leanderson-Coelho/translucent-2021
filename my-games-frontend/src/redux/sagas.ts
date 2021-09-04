import { all } from 'redux-saga/effects';
import gameSaga from './game/gameSaga';

function* rootSaga() {
  yield all([...gameSaga]);
}

export default rootSaga;
