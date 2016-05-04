import React, {
    Component,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import PreviewImage from './PreviewImage';

export default class StoryItem extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        const { story}  = this.props;
        return (
            <TouchableHighlight key={story.name} style={styles.highlight} underlayColor='white' onPress={this.onClick}>
                <View style={styles.storyContainer}>
                    <View style={styles.contentContainer}>
                        <View style={styles.topContainer}>
                            <Text style={styles.votes}>{story.score}</Text>
                            <Text style={styles.authorAndSubreddit}>{story.author}</Text>
                            <Text style={styles.in}> in </Text>
                            <Text style={styles.authorAndSubreddit}>{story.subreddit}</Text>
                        </View>
                        <Text style={styles.title} numberOfLines={2}>{story.title}</Text>
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
            </TouchableHighlight>
        )
    }

    onClick() {
        const { navigator, story } = this.props;
        navigator.push({ story: story });
    }
}

const styles = StyleSheet.create({
    highlight: {
        flex: 1,
    },
    storyContainer: {
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
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        marginTop: 6,
        marginBottom: 8,
        color: '#444444',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    author: {
        textAlign: 'center'
    },
    votes: {
        fontSize: 14,
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