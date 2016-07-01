import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';

const initialState = {
    ideas: [
        {
            title: 'a',
            author: 'b',
            description: 'c',
            supporters: 'd',
            buttonValue: 'e'
        },
        {
            title: 'a',
            author: 'b',
            description: 'c',
            supporters: 'd',
            buttonValue: 'e'
        }
    ]
};

const reducer = (state, action) => initialState;

const Idea = ({ idea }) => {
    return (
        <div>
            <h1>{ idea.title }</h1>
            <h2>{ idea.author }</h2>
            <p>{ idea.description }</p>
            <p>{ idea.supporters }</p>
            <button>{ idea.buttonValue }</button>
        </div>
    );
};

let App = ({ ideas }) => {
    return <div>{ideas.map((idea, key) => <Idea key={ key } idea={ idea } /> ) }</div>;
};

const mapStateToProps = ({ ideas }) => {
    return { ideas };
};

App = connect(mapStateToProps)(App);

render(
    <Provider store={ createStore(reducer) }>
        <App />
    </Provider>,
    document.getElementById('app')
);
