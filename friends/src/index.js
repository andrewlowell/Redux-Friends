import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { LOGIN_SUCCESS } from './actions';

const addTokenToLocalStorage = store => next => action => {
  if(action.type === LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
};

const store = createStore(reducer, applyMiddleware(addTokenToLocalStorage, thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

