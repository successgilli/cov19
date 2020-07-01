import { takeLatest, put } from 'redux-saga/effects';

import { INIT_BUCKET, CHANGE_BUCKET_SIZE } from './action';

export const initHeightChange = (payload) => ({ type: INIT_BUCKET, payload });
const updateBucket = (payload) => ({ type: CHANGE_BUCKET_SIZE, payload });

function* bucketWorker(action) {
  yield put(updateBucket(action.payload));
}

export function* bucketWatcher() {
  yield takeLatest(INIT_BUCKET, bucketWorker);
}

const initialState = {
  bucket1: false,
  bucket2: false,
  bucket3: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_BUCKET_SIZE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
