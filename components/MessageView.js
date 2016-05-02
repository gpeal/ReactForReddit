import React, {
    Component,
    Text,
    View
} from 'react-native';

export default class MessageView extends Component {

    render() {
        return (
            <Text>
                {this.props.message}
            </Text>
        );
    }
}