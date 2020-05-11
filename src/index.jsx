import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index';

// eslint-disable-next-line import/extensions
import App from './components/App/index.jsx';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
