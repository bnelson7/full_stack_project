import { connect } from 'react-redux'
import UserProfile from './user_profile'
import { createVideo, requestVideos, deleteVideo, updateVideo, requestVideo } from '../../actions/video_actions'
import { requestUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id]
    let video = currentUser.uploads && currentUser.uploads[0]
    return ({
        currentUser: currentUser,
        videos: Object.values(state.entities.videos),
        path: ownProps.location.pathname,
        video: video
    })
}

const mDTP = dispatch => {
     
    return {
        createVideo: video => dispatch(createVideo(video)),
        requestVideos: () => dispatch(requestVideos()),
        deleteVideo: videoId => dispatch(deleteVideo(videoId)),
        updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
        requestUser: id => dispatch(requestUser(id)),
        requestVideo: id => dispatch(requestVideo(id))
    }
}

export default connect(mSTP, mDTP)(UserProfile)