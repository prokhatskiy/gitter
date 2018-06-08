import { createStore, applyMiddleware } from 'redux'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

let store;

const axiosClient = axios.create({
  baseURL: '/',
  responseType: 'json'
});

const enhancers = composeWithDevTools(
  applyMiddleware(
    axiosMiddleware(axiosClient)
  )
);

export function initStore() {
    store = createStore(
      reducer,
      {},
      enhancers
    );

    return store;
}

export function getStore() {
    return store;
}