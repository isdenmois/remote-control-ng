import { combineReducers } from 'redux';
import films from './films';
import serials from './serials';

export default combineReducers({
    films,
    serials,
});
