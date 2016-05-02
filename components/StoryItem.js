import React, {
    Component,
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import PreviewImage from './PreviewImage';

export default class StoryItem extends Component {

    render() {
        let story = this.props.story;
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
        )
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