const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case 'serials':
            return action.serials;
    }

    return state;
}
