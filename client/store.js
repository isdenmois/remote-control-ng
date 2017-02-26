import { createStore } from 'redux';
import rootReducer from './reducers';

let loadedStore;
if (process.env.NODE_ENV === 'production') {
    loadedStore = createStore(rootReducer);
} else {
    loadedStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default loadedStore;
