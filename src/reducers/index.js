import { combineReducers } from 'redux';
import initialIdeasState from './initialIdeasState';

export default combineReducers({ user, nav, ideas });

function user () {
    return { name: 'theo'};
}

function nav (state=false, action) {
    return action.type === 'TOGGLE_NAV' ? !state : state;
}

function ideas (state=initialIdeasState, action) {
    fetchIdeas().then(data => console.log(data));
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
                });
            });
        default:
            return state;
    }
};

function acceptForm ({ title, author, description }) {
    return {
        title: title.value,
        author: author.value,
        description: description.value,
        supporters: [author.value],
        comments: [],
        id: 3
    };
};

function fetchIdeas () {
    const url = 'https://syfdbw24e0.execute-api.eu-west-1.amazonaws.com/prod';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({'operation': 'read'})
    })
        .then(res => res.json());
}
