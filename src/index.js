import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

// CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app-root')
);
