import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import reducers from './reducers';
import { Router, hashHistory } from 'react-router';
import routes from './routes/';
import './main.scss';

render(
    <Provider store={ createStore(reducers) }>
        <Router routes={ routes } history={ hashHistory } />
    </Provider>,
    document.getElementById('app')
);
