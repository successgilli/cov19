import { all } from 'redux-saga/effects';

import { placeWatcherSaga } from './modules/place/index';
import { bucketWatcher } from './modules/bucket/index';

export default function* rootSaga() {
  yield all([
    placeWatcherSaga(),
    bucketWatcher(),
  ]);
}
