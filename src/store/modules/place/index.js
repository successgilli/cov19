import { takeLatest, put, call } from 'redux-saga/effects';

import {
  INITIATE_CLICK,
  UPDATE_PLACE,
  CLOSE_DETAIL,
  INITIATE_CLOSE,
  ADD_PLACES_TO_STATE,
  HANDLE_PLACES,
  GET_NIGERIAN_STATES,
} from './action';

import requestObject from './request';

const { fetchCovidReport, fetchStateReport } = requestObject;

const updateSelectedAreas = (payload) => ({ type: UPDATE_PLACE, payload });
const removeDetail = (payload) => ({ type: CLOSE_DETAIL, payload });
const addCountriesToState = (payload) => ({ type: ADD_PLACES_TO_STATE, payload });
const addStates = (payload) => ({ type: GET_NIGERIAN_STATES, payload });

export const initiateClick = (payload) => ({ type: INITIATE_CLICK, payload });
export const closeDetail = (payload) => ({ type: INITIATE_CLOSE, payload });
export const getCovidResults = (payload) => ({ type: HANDLE_PLACES, payload });

function* workerSaga(action) {
  yield put(updateSelectedAreas(action.payload));
}

function* closeWorker(action) {
  yield put(removeDetail(action.payload));
}

function* covidWorker() {
  const resultLIst = yield call(fetchCovidReport);
  const stateResult = yield call(fetchStateReport);

  yield put(addCountriesToState(resultLIst.Countries));
  yield put(addStates(stateResult));
}

export function* placeWatcherSaga() {
  yield takeLatest(INITIATE_CLICK, workerSaga);
  yield takeLatest(INITIATE_CLOSE, closeWorker);
  yield takeLatest(HANDLE_PLACES, covidWorker);
}

const initialState = {
  details: {},
  countries: [],
  states: [],
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
          [payload.Country]: payload,
        },
      };
    case CLOSE_DETAIL:
      return {
        ...state,
        details: removeAreaFromDetails(details, payload),
      };
    case ADD_PLACES_TO_STATE:
      return {
        ...state,
        countries: payload || [],
      };
    case GET_NIGERIAN_STATES:
      return {
        ...state,
        states: payload || [],
      };
    default:
      return state;
  }
};
