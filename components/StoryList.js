import React, {
    Component,
    ListView,
    StyleSheet,
    View
} from 'react-native';
import {
    connect
} from 'react-redux';
import StoryItem from './StoryItem';


class StoryList extends Component {

    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.data.id !== row2.data.id
        })
    }

    render() {
        this.dataSource = this.dataSource.cloneWithRows(this.props.stories);

        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderItem}
                style={styles.listView}/>
        );
    }

    renderItem(item) {
        const story = item.data;
        return (
            <StoryItem story={story}/>
        );
    }
}
StoryList.contextTypes = {
    store: React.PropTypes.object
};

export default connect(
    state => ({
        stories: state.stories
    })
)(StoryList);

const styles = StyleSheet.create({
    listView: {
        paddingTop: 20,
        backgroundColor: '#EEEEEE'
    }
});