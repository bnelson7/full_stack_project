import { RECEIVE_VIDEOS } from '../actions/video_actions'

const videosReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)

    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos
        default:
            return defaultState
    }
}

export default videosReducer