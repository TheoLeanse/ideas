const initialState = [
    {
        title: 'Developer corporate responsibility',
        author: 'James',
        description: 'Get employers to volunteer their developers\' time as part of their corporate responsibility programme',
        supporters: ['Sue', 'Gareth', 'Clive', 'June'],
        comments: [{}, {}],
        id: 2
    },
    {
        title: 'Distribution network for free food',
        author: 'Charlie',
        description: 'Retrieve and distribute free food to the needy',
        supporters: ['Sue', 'Gareth', 'Clive', 'June'],
        comments: [{}, {}],
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

export default (state=initialState, action) => {
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
