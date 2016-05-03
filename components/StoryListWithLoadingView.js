import React, {
    Component
} from 'react-native';
import {
    connect
} from 'react-redux';
import MessageView from './MessageView'
import StoryList from './StoryList'

const REQUEST_URL = 'https://www.reddit.com/.json';

class StoryListWithLoadingView extends Component {
    componentDidMount() {
        console.log("StoryListWithLoadingView mounted");
        this.fetchData();
    }

    fetchData() {
        console.log("fetching");
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => this.props.addStories(responseData.data.children))
            .done()
    }


    render() {
        const { stories, navigator } = this.props;
        console.log("Rendering StoryListWithLoadingView with " + stories.length + " stories");

        if (stories.length == 0) {
            return <MessageView message="Loading..." />;
        }

        return <StoryList stories={stories} navigator={navigator} />;
    }
}

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
)(StoryListWithLoadingView);