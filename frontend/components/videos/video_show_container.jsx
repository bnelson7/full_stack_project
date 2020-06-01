import { connect } from 'react-redux'
import { requestVideo, requestVideos, updateVideo } from '../../actions/video_actions'
import { requestComments } from '../../actions/comment_actions'
import { createVideoLike, deleteVideoLike } from '../../actions/like_actions'
import { updateUser, requestUser } from '../../actions/user_actions'
import VideoShow from './video_show'
import { closeModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    let videoId = ownProps.match.params.videoId
    let currentUser = state.entities.users[state.session.id]
    let like = currentUser && currentUser.liked && currentUser.liked.videos ? currentUser.liked.videos[videoId] : null
    if (like) {
        var liked = like.liked 
        var disliked = like.disliked   
    } else {
        var liked = false
        var disliked = false
    }
    return {
        videoId: videoId,
        video: state.entities.videos[ownProps.match.params.videoId],
        videos: Object.values(state.entities.videos),
        path: ownProps.location.pathname,
        currentUser: currentUser,
        like: like,
        liked: liked,
        disliked: disliked
    }
}

const mDTP = dispatch => ({
    requestVideo: id => dispatch(requestVideo(id)),
    requestVideos: () => dispatch(requestVideos()),
    requestComments: videoId => dispatch(requestComments(videoId)),
    updateVideo: (like, videoId) => dispatch(updateVideo(like, videoId)),
    createVideoLike: like => dispatch(createVideoLike(like)),
    deleteVideoLike: (userId, videoId) => dispatch(deleteVideoLike(userId, videoId)),
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    requestUser: id => dispatch(requestUser(id)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(VideoShow)