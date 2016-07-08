import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
import { userReducer, ideasReducer } from './reducers';
import { Supporters, Idea, IdeaSubmit, App } from './components';
import { Router } from 'react-router';
import routes from './routes';

import './main.scss';

const reducer = combineReducers({
    user: userReducer,
    ideas: ideasReducer
});

render(
    <Provider store={ createStore(reducer) }>
        <Router routes={ routes } />
    </Provider>,
    document.getElementById('app')
);
