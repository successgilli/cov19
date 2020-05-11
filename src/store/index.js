import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducer';
import mySaga from './rootSaga';
import 'regenerator-runtime/runtime';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
  }

  middlewares.push(createLogger());
}

const composedWithEnhancers = compose(
  applyMiddleware(
    ...middlewares,
  ),
  ...enhancers,
);

const store = createStore(reducer, composedWithEnhancers);

sagaMiddleware.run(mySaga);

export default store;
