import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';

const initialState = [
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
];

const acceptForm = ({ title, author, description }) => {
    return {
        title: title.value,
        author: author.value,
        description: description.value,
        supporters: 'd',
        buttonValue: 'e'
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_IDEA':
            return [
                ...state,
                acceptForm(action.data)
            ];
        default:
            return initialState;
    }
};

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

let IdeaSubmit = ({ handleSubmit }) => {
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            handleSubmit(e.target);
        }} >
            <input type="text" name="title" />
            <input type="text" name="author" />
            <input type="text" name="description" />
            <input type="submit" />
        </form>
    );
};

const mapStateToIdeaSubmitProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit(formData) {
            console.log(dispatch, formData);
            dispatch({type: 'ADD_IDEA', data: formData})
        }
    }
}

IdeaSubmit = connect(mapStateToIdeaSubmitProps, mapDispatchToProps)(IdeaSubmit);

let App = ({ ideas }) => {
    console.log(ideas);
    return <div>
        {ideas.map((idea, key) => <Idea key={ key } idea={ idea } /> ) }
        <IdeaSubmit />
    </div>;
};

const mapStateToProps = (state) => {
    return { ideas: state };
};

App = connect(mapStateToProps)(App);

render(
    <Provider store={ createStore(reducer) }>
        <App />
    </Provider>,
    document.getElementById('app')
);
