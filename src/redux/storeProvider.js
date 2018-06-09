import { createStore, applyMiddleware } from 'redux'
import Cookies from 'js-cookie';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import http from 'Utils/http';

import reducer from './reducer';

let store;

const initialState = {
  auth: {
    isLoggedIn: true //Boolean(Cookies.get('access_token'))
  }
};

const enhancers = composeWithDevTools(
  applyMiddleware(
    axiosMiddleware(http),
    thunk
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