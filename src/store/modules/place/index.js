import { takeLatest, put } from 'redux-saga/effects';

import {
  INITIATE_CLICK,
  UPDATE_PLACE,
  CLOSE_DETAIL,
  INITIATE_CLOSE,
} from './action';

const updateSelectedAreas = (payload) => ({ type: UPDATE_PLACE, payload });
const removeDetail = (payload) => ({ type: CLOSE_DETAIL, payload });

export const initiateClick = (payload) => ({ type: INITIATE_CLICK, payload });
export const closeDetail = (payload) => ({ type: INITIATE_CLOSE, payload });

function* workerSaga(action) {
  yield put(updateSelectedAreas(action.payload));
}

function* closeWorker(action) {
  yield put(removeDetail(action.payload));
}

export function* placeWatcherSaga() {
  yield takeLatest(INITIATE_CLICK, workerSaga);
  yield takeLatest(INITIATE_CLOSE, closeWorker);
}

const initialState = {
  details: {},
};

const removeAreaFromDetails = (datailObj, payload) => {
  const newDetail = Object.keys(datailObj).reduce((acc, item) => {
    if (item !== payload) return { ...acc, [item]: datailObj[item] };

    return acc;
  }, {});

  return newDetail;
};

export default (state = initialState, action = {}) => {
  const { payload, type } = action;
  const { details } = state;

  switch (type) {
    case UPDATE_PLACE:
      return {
        ...state,
        details: {
          ...details,
          [payload.name]: payload,
        },
      };
    case CLOSE_DETAIL:
      return {
        ...state,
        details: removeAreaFromDetails(details, payload),
      };
    default:
      return state;
  }
};
