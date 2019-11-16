import { combineReducers } from 'redux';
import ListsReducer from './ListReducer';

export default combineReducers({
    lists: ListsReducer
});