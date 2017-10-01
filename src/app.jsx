import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter, syncHistoryWithStore } from 'react-router-redux';

import configureStore, { history } from './setup/store';
import routes from './setup/routes';

import App from './components/root/App';
import Login from './components/pages/Login';

const store = configureStore();

const rootNode = document.getElementById('app');

function render() {
  ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  ), rootNode);
}

render();