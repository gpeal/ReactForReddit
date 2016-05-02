/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    ListView,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import MessageView from './components/MessageView';
import StoryItem from './components/StoryItem';

const REQUEST_URL = 'https://www.reddit.com/.json';

class ReactForReddit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1.data.id !== row2.data.id
            }),
            loaded: false
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.children),
                    loaded: true
                })
            })
            .done()
    }

    render() {
        if (!this.state.loaded) {
            return <MessageView message="Loading Reddit..." />;
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderItem}
                style={styles.listView}/>
        );
    }

    renderItem(item) {
        const story = item.data;
        return (
            <StoryItem story={story} />
        );
    }
}

const styles = StyleSheet.create({
    listView: {
        paddingTop: 20,
        backgroundColor: '#EEEEEE'
    }
});

AppRegistry.registerComponent('ReactForReddit', () => ReactForReddit);
