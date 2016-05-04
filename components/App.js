import React, {
    BackAndroid,
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
import StoryScreen from './StoryScreen';
import StoryListWithLoadingView from './StoryListWithLoadingView';

export default class App extends Component {

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    render() {
        console.log("Rendering App")
        return (
            <Navigator
                ref="navigator"
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                initialRoute={{}}
                renderScene={this.renderScene}
             />
        );
    }

    renderScene(route, navigator) {
        if (route.story) {
            return <StoryScreen story={route.story} />
        }

        return <StoryListWithLoadingView navigator={navigator} />
    }

    handleBackButton() {
        console.log('this ' + this);
        console.log('this.refs ' + this.refs);
        console.log('this.refs.navigator ' + this.refs.navigator);
        const navigator = this.refs.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }

        return false;
    }
}