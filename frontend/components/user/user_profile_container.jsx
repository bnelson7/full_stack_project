import { connect } from 'react-redux'
import UserProfile from './user_profile'
import { createVideo, requestVideos } from '../../actions/video_actions'

const mSTP = state => {
    debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        videos: Object.values(state.entities.videos)
    })
}

const mDTP = dispatch => ({
    createVideo: video => dispatch(createVideo(video)),
    requestVideos: () => dispatch(requestVideos())
})

export default connect(mSTP, mDTP)(UserProfile)