import { combineReducers } from 'redux';

import placeReducer from './modules/place/index';
import otherReducer from './modules/close/index';
import bucketReducer from './modules/bucket/index';

export default combineReducers({
  placeReducer,
  otherReducer,
  bucketReducer,
});
