import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';

const initialState = [
    {
        title: 'Developer corporate responsibility',
        author: 'James',
        description: 'Get employers to volunteer their developers\' time as part of their corporate responsibility programme',
        supporters: ['Sue', 'Gareth', 'Clive', 'June'],
        id: 2
    },
    {
        title: 'Distribution network for free food',
        author: 'Charlie',
        description: 'Retrieve and distribute free food to the needy',
        supporters: ['Sue', 'Gareth', 'Clive', 'June'],
        id: 1
    }
];

const acceptForm = ({ title, author, description }) => {
    return {
        title: title.value,
        author: author.value,
        description: description.value,
        supporters: [],
        id: 3
    };
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_IDEA':
            return [
                acceptForm(action.data),
                ...state
            ];
        case 'SUPPORT':
            return state.map(item => {
                if (item.id !== action.id) return item;
                return Object.assign({}, item, {
                    supporters: [
                        ...item.supporters,
                        action.username
                    ]
                })
            })
        default:
            return state;
    }
};

let Supporters = ({ supporters, id, clickHandler }) => {
    return (
        <div>
            <ul>{ supporters.map((supporter, i) => <li key={ i }>{ supporter }</li>) }</ul>
            <button onClick={ () => clickHandler('Theo', id) }>Support</button>
        </div>
    );
}

const mapStateToSupportProps = () => {
    return {};
}

const mapDispatchToSupportProps = (dispatch) => {
    return {
        clickHandler(username, id) {
            dispatch({type: 'SUPPORT', username, id})
        }
    }
}

Supporters = connect(mapStateToSupportProps, mapDispatchToSupportProps)(Supporters);

let Idea = ({ idea }) => {
    return (
        <div>
            <h1>{ idea.title }</h1>
            <h2>{ idea.author }</h2>
            <p>{ idea.description }</p>
            <Supporters supporters={ idea.supporters } id={ idea.id } />
        </div>
    );
};


let IdeaSubmit = ({ handleSubmit }) => {
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            handleSubmit(e.target);
        }} >
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" />
            <label htmlFor="author">Auhor:</label>
            <input type="text" name="author" />
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" />
            <input type="submit" value="Submit" />
        </form>
    );
};

const mapStateToIdeaSubmitProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit(formData) {
            dispatch({type: 'ADD_IDEA', data: formData})
        }
    }
}

IdeaSubmit = connect(mapStateToIdeaSubmitProps, mapDispatchToProps)(IdeaSubmit);

let App = ({ ideas }) => {
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
