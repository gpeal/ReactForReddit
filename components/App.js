import React, {
    Component,
    Navigator,
    StyleSheet,
    View
} from 'react-native';
import {
    connect
} from 'react-redux';
import {
    Actions,
    IndexRoute,
    Router,
    Scene
} from 'react-native-router-flux';
const RouterWithRedux = connect()(Router);
import StoryListWithLoadingView from './StoryListWithLoadingView';

export default class App extends Component {

    render() {
        console.log("Rendering App")
        return (
            <Navigator
                ref="naviagtor"
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromBottomAndroid;
                }}
                initialRoute={{}}
                renderScene={this.renderScene}
             />
        );
    }

    renderScene(route, navigator) {
        return <StoryListWithLoadingView />
    }
}