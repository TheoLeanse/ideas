import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { userReducer, ideasReducer, uiReducer } from './reducers';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './main.scss';

const reducer = combineReducers({
    user: userReducer,
    ideas: ideasReducer,
    nav: uiReducer
});

render(
    <Provider store={ createStore(reducer) }>
        <Router routes={ routes } history={ hashHistory } />
    </Provider>,
    document.getElementById('app')
);
