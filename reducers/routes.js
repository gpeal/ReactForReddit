import {
    Reducer
} from 'react-native-router-flux';

// needs to fake params to pass sanity checks
const routerReducer = Reducer({initialState: {key: true}, scenes: true});

export default function(state = null, action) {
    console.log('routes action ' + action.type);
    if (action.type === 'RootContainerInitialAction') {
        return action.initialState;
    } else {
        return routerReducer(state, action);
    }
}