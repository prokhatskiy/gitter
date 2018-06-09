import { createStore, applyMiddleware } from 'redux'
import Cookies from 'js-cookie';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

let store;

const initialState = {
  auth: {
    isLoggedIn: true //Boolean(Cookies.get('access_token'))
  }
};

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
      initialState,
      enhancers
    );

    return store;
}

export function getStore() {
    return store;
}