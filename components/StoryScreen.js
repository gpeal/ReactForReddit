import React, {
    Component,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class StoryScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { story } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}  source={{uri: story.preview.images[0].source.url}} />
                </View>
                <Text style={styles.text}>{story.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EEEEEE'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    text: {

    }
});

