import { combineReducers } from 'redux';
import initialIdeasState from './initialIdeasState';

const acceptForm = ({ title, author, description }) => {
    return {
        title: title.value,
        author: author.value,
        description: description.value,
        supporters: [author.value],
        comments: [],
        id: 3
    };
};

export function ideasReducer (state=initialIdeasState, action) {
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

export function userReducer (state={ name: 'theo'}, action) {
    return state;
}

export function uiReducer (state=false, action) {
    switch (action.type) {
        case 'TOGGLE_NAV':
            return !state;
        default:
            return state;
    }
}

export default combineReducers({
    user: userReducer,
    ideas: ideasReducer,
    nav: uiReducer
});
