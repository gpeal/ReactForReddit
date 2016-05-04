import React, {
    Component,
    ListView,
    RecyclerViewBackedScrollView,
    StyleSheet,
    View
} from 'react-native';
import {
    connect
} from 'react-redux';
import StoryItem from './StoryItem';


export default class StoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1.data.id !== row2.data.id,
            }).cloneWithRows(props.stories)
        };
    }

    render() {
        const { navigator } = this.props;
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(item) => this.renderItem(navigator, item)}
                style={styles.listView} />
        );
    }

    renderItem(navigator, item) {
        const story = item.data;
        return (
            <StoryItem story={story} navigator={navigator}/>
        );
    }
}

const styles = StyleSheet.create({
    listView: {
        paddingTop: 20,
        backgroundColor: '#EEEEEE'
    }
});