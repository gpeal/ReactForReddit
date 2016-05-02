import React, {
    Component,
    ListView,
    StyleSheet,
    View
} from 'react-native';
import {
    connect
} from 'react-redux'
import MessageView from './MessageView';
import StoryItem from './StoryItem';

const REQUEST_URL = 'https://www.reddit.com/.json';

class StoryList extends Component {

    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.data.id !== row2.data.id
        })
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => this.props.addStories(responseData.data.children))
            .done()
    }

    render() {
        const stories = this.props.stories;

        if (stories.length == 0) {
            return <MessageView message="Loading Reddit..." />;
        }

        this.dataSource = this.dataSource.cloneWithRows(stories);

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
            <StoryItem story={story} />
        );
    }
}
StoryList.contextTypes = {
    store: React.PropTypes.object
};

export default connect(
    state => ({
        stories: state.stories
    }),
    dispatch => ({
        addStories: (stories) => {
            dispatch({
                type: 'ADD_STORIES',
                stories
            })
        }
    })
)(StoryList);

const styles = StyleSheet.create({
    listView: {
        paddingTop: 20,
        backgroundColor: '#EEEEEE'
    }
});