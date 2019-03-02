import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/appComponent';
import './index.css';

ReactDOM.render(
  <Provider store={}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
