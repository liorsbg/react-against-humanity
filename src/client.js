import './style/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './view/app';

import WebSocketClientConnector from './utils/connector/webSocketClient';
import clientRouter from './router/client';

import createStore from './store';

let connector = new WebSocketClientConnector(
  clientRouter, {}, 'ws://localhost:8000/');

let store = createStore(undefined, connector);
connector.store = store;

window.store = store;
window.connector = connector;

// Create wrapper element...

let wrapper = document.createElement('div');
document.body.appendChild(wrapper);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  wrapper
);
