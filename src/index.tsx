// tslint:disable:ordered-imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { configureStore } from 'src/configuration/storeConfig';
import App from 'src/components/appComponent';
import './index.css';

const store = createStore(configureStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
