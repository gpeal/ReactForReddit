import React, {
    Component,
    View
} from 'react-native';
import {
    connect
} from 'react-redux';
import MessageView from './MessageView';
import StoryList from './StoryList';

const REQUEST_URL = 'https://www.reddit.com/.json';

class App extends Component {

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
            return <MessageView message="Loading Reddit..."/>;
        }

        return <StoryList stories={stories} />
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
)(App);