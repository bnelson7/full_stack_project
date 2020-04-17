import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions'

const videosReducer = (prevState = {}, action) => {
    Object.freeze(prevState)
    let newState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos
        case RECEIVE_VIDEO:
            newState[action.video.id] = action.video
            return newState
        default:
            return prevState
    }
}

export default videosReducer