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
        this.getDragBarStyle = this.getDragBarStyle.bind(this);
        this.onResponderStart = this.onResponderStart.bind(this);
        this.onResponderMove = this.onResponderMove.bind(this);
        this.onResponderRelease = this.onResponderRelease.bind(this);
        this.state = {
            x: 0,
            y: 0
        };
    }

    render() {

        const { story } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}  source={{uri: story.preview.images[0].source.url}} />
                </View>
                <Text style={styles.title}>{story.title}</Text>
                <View
                    style={[styles.dragBar, this.getDragBarStyle()]}
                    onStartShouldSetResponder={() => true}
                    onMoveShouldSetResponder={() => true}
                    onResponderMove={this.onResponderMove}
                    onResponderRelease={this.onResponderRelease}
                />
            </View>
        )
    }

    getDragBarStyle() {
        return {
            transform: [
                {
                    translateX: this.state.x
                },
                {
                    translateY: this.state.y
                }
            ]
        }
    }

    onResponderStart() {
        return true;
    }

    onResponderMove(evt) {
        this.setState({
            x: this.state.x + evt.nativeEvent.pageX,
            y: this.state.y + evt.nativeEvent.pageY
        })
    }

    onResponderRelease(evt) {

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
    title: {

    },
    dragBar: {
        backgroundColor: '#FF0000',
        height: 48
    }
});

