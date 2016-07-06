import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
import reducer from './reducers';
import { Supporters, Idea, IdeaSubmit, App } from './components';
import './main.scss';

render(
    <Provider store={ createStore(reducer) }>
        <App />
    </Provider>,
    document.getElementById('app')
);
