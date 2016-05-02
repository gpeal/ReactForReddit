import { combineReducers, applyMiddleware } from 'redux';
import devTools from 'remote-redux-devtools';
import stories from './stories';
import routes from './routes';

export default combineReducers({
    stories,
    routes
}, undefined, devTools())