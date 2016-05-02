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

const REQUEST_URL = 'https://www.reddit.com/.json';

class ReactForReddit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1.data.name !== row2.data.name
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
            return this.renderMessageView("Loading Reddit...");
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderItem}
                style={styles.listView}/>
        );
    }

    renderMessageView(message) {
        return (
            <View style={styles.container}>
                <Text>
                    {message}
                </Text>
            </View>
        )
    }

    renderItem(item) {
        const story = item.data;
        return (
            <View key={story.name} style={styles.container}>
                <PreviewImage preview={story.preview}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{story.title}</Text>
                    <Text style={styles.author}>{story.author}</Text>
                </View>
            </View>
        );
    }
}

class PreviewImage extends Component {
    render() {
        const preview = this.props.preview;
        return preview === undefined || preview.images === undefined || preview.images.length == 0 ?
            null :
            (
                <Image
                    source={{uri: preview.images[0].source.url}}
                    style={styles.thumbnail}/>
            );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 14,
        marginBottom: 8,
        textAlign: 'center'
    },
    author: {
        textAlign: 'center'
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('ReactForReddit', () => ReactForReddit);
