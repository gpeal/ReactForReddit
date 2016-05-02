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
            <View key={story.name} style={styles.storyContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.topContainer}>
                        <Text style={styles.votes}>{story.score}</Text>
                        <Text style={styles.authorAndSubreddit}>{story.author}</Text>
                        <Text style={styles.in}> in </Text>
                        <Text style={styles.authorAndSubreddit}>{story.subreddit}</Text>
                    </View>
                    <Text style={styles.title}>{story.title}</Text>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.bottomText}>
                            {story.num_comments} Comments
                            {' • '}
                            {story.domain}
                        </Text>
                   </View>
                </View>
                <PreviewImage preview={story.preview}/>
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
    storyContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginLeft: 8,
        marginTop: 4,
        marginRight: 8,
        marginBottom: 4,
        paddingLeft: 8,
        paddingTop: 4,
        paddingRight: 8,
        paddingBottom: 4,
        elevation: 4
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    contentContainer: {
        flex: 1
    },
    title: {
        fontSize: 14,
        marginTop: 6,
        marginBottom: 8,
        color: '#444444',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1
    },
    author: {
        textAlign: 'center'
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#EEEEEE'
    },
    votes: {
        fontSize: 13,
        color: "#AAAAAA",
        paddingRight: 4
    },
    authorAndSubreddit: {
        fontSize: 11,
        color: '#0E3D4D'
    },
    in: {
        fontSize: 10,
        color: '#858585'
    },
    bottomText: {
        fontSize: 10,
        color: '#555555'
    }
});

AppRegistry.registerComponent('ReactForReddit', () => ReactForReddit);
