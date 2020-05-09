import { connect } from 'react-redux'
import { requestVideo, requestVideos, updateVideo } from '../../actions/video_actions'
import { requestComments } from '../../actions/comment_actions'
import { createVideoLike, deleteVideoLike } from '../../actions/like_actions'
import VideoShow from './video_show'

const mSTP = (state, ownProps) => {
    debugger
    return {
        videoId: ownProps.match.params.videoId,
        video: state.entities.videos[ownProps.match.params.videoId],
        videos: Object.values(state.entities.videos),
        path: ownProps.location.pathname,
        currentUser: state.entities.users[state.session.id],
        likes: Object.values(state.entities.likes)
    }
}

const mDTP = dispatch => ({
    requestVideo: id => dispatch(requestVideo(id)),
    requestVideos: () => dispatch(requestVideos()),
    requestComments: videoId => dispatch(requestComments(videoId)),
    updateVideo: (like, videoId) => dispatch(updateVideo(like, videoId)),
    createVideoLike: like => dispatch(createVideoLike(like)),
    deleteVideoLike: id => dispatch(deleteVideoLike(id))
})

export default connect(mSTP, mDTP)(VideoShow)