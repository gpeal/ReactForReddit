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
import App from './components/App';
import combineReducers from './reducers/index';

class ReactForReddit extends Component {
    render() {
        console.log("Rendering index");
        return (
            <Provider store={createStore(combineReducers)} >
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactForReddit', () => ReactForReddit);
