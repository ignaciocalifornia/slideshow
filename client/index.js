import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import effects from 'redux-effects'
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {slideshow} from './reducers';

import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import App from './App';

const store = createStore(
  combineReducers({
    slideshow,
    routing: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    // Enables action functions
    thunk,
    // Enables array of actions
    multi,
    // Enables action compose, {bind}
    effects,
    reduxLogger
  )
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
