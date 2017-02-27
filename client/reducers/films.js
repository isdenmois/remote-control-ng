const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case 'films':
            return action.films;
    }

    return state;
}
