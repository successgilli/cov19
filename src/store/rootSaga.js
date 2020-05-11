import { all } from 'redux-saga/effects';

import { placeWatcherSaga } from './modules/place/index';

export default function* rootSaga() {
  yield all([
    placeWatcherSaga(),
  ]);
}
