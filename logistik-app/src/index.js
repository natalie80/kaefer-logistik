import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux"; // craete global state
import reduxThunk from 'redux-thunk';  // For asynchronous action, middleware libraries redux-thunk or redux-sage

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducer from './store/reducers';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null ) || compose;


// STORE -> GLOBALIZED STATE
//use applyMiddleware to add the thunk middleware to the store
const mystore = createStore (
    allReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
);


const app = (
    <Provider store={mystore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
