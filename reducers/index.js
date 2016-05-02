import { combineReducers, applyMiddleware } from 'redux';
import devTools from 'remote-redux-devtools';
import stories from './StoriesReducer';

export default combineReducers({
    stories
}, undefined, devTools())