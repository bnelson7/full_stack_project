import { connect } from 'react-redux'
import UserProfile from './user_profile'
import { createVideo, requestVideos, deleteVideo, updateVideo } from '../../actions/video_actions'

const mSTP = state => {
    debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        videos: Object.values(state.entities.videos)
    })
}

const mDTP = dispatch => {
    debugger 
    return {
        createVideo: video => dispatch(createVideo(video)),
        requestVideos: () => dispatch(requestVideos()),
        deleteVideo: videoId => dispatch(deleteVideo(videoId)),
        updateVideo: video => dispatch(updateVideo(video))
    }
}

export default connect(mSTP, mDTP)(UserProfile)