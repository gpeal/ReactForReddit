/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    Image,
    ListView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    createStore
} from 'redux';
import {
    Provider
} from 'react-redux';
import combineReducers from './reducers/index';
import App from './components/App'

class ReactForReddit extends Component {
    render() {
        return (
            <Provider store={createStore(combineReducers)} >
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactForReddit', () => ReactForReddit);
