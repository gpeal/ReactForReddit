import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class MessageView extends Component {

    render() {
        const { message } = this.props;
        console.log("MessageView with " + message);
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {message}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
    },
    text: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10,
    }
});