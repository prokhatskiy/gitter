import { createStore, applyMiddleware, combineReducers } from 'redux'
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import http from 'Utils/http';

import reducers from './reducers';

let store;

const initialState = {
  auth: {
    isLoggedIn: true
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
      combineReducers(reducers),
      initialState,
      enhancers
    );

    return store;
}

export function getStore() {
    return store;
}