import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../../actions/video_actions'

const videosReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState);

    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            debugger
            // nextState[action.video.id] = action.video
            return action.payload.videos;
        case REMOVE_VIDEO:
            
            delete nextState[action.videoId]
            return nextState;
        default:
            return prevState;
    }
}

export default videosReducer;