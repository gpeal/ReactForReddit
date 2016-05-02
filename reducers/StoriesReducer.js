export default function stories(state = [], action = {}) {
    switch (action.type) {
        case 'ADD_STORIES':
            return [
                    ...state,
                    ...action.stories
                ];
        default:
            return state;
    }
}