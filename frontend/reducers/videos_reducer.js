import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions'

const videosReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    let newState = Object.assign({}, defaultState)

    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos
        case RECEIVE_VIDEO:
            newState[action.video.id] = action.video
            return newState
        default:
            return defaultState
    }
}

export default videosReducer