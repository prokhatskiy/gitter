import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { initStore, getStore } from 'Redux/storeProvider';

import App from './App';

initStore();

ReactDOM.render(
    <Provider store={getStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
