import { connect } from 'react-redux'
import UserProfile from './user_profile'
import { createVideo, requestVideos, deleteVideo, updateVideo } from '../../actions/video_actions'

const mSTP = (state, ownProps) => {
    debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        videos: Object.values(state.entities.videos),
        path: ownProps.location.pathname
    })
}

const mDTP = dispatch => {
     
    return {
        createVideo: video => dispatch(createVideo(video)),
        requestVideos: () => dispatch(requestVideos()),
        deleteVideo: videoId => dispatch(deleteVideo(videoId)),
        updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId))
    }
}

export default connect(mSTP, mDTP)(UserProfile)