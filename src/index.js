import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
import { userReducer, ideasReducer } from './reducers';
import { Supporters, Idea, IdeaSubmit, App } from './components';

import './main.scss';

const reducer = combineReducers({
    user: userReducer,
    ideas: ideasReducer
});

render(
    <Provider store={ createStore(reducer) }>
    <App />
    </Provider>,
    document.getElementById('app')
);
