import { createStore, combineReducers, applyMiddleware } from 'redux'

let store;

const reducers = function (state = initialState) {
    return state;
};

const initialState = {
    isLoggedIn: true
};

const enhancers = applyMiddleware();

export function initStore() {
    store = createStore(reducers, initialState, enhancers);

    return store;
}

export function getStore() {
    return store;
}