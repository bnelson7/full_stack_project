import { connect } from 'react-redux'
import { requestVideo, requestVideos, updateVideo } from '../../actions/video_actions'
import { requestComments } from '../../actions/comment_actions'
import { createVideoLike, deleteVideoLike } from '../../actions/like_actions'
import { updateUser, requestCurrentUser } from '../../actions/user_actions'
import VideoShow from './video_show'
import { closeModal } from '../../actions/modal_actions'
import { requestChannel, editChannel } from '../../actions/channel_actions'
import { createSubscription, deleteSubscription } from '../../actions/channel_actions'
import { requestCurrentChannel } from '../../actions/channel_actions'

const mSTP = (state, ownProps) => {
    let videoId = ownProps.match.params.videoId
    let video = state.entities.videos[videoId]
    let currentUser = state.entities.users[state.session.id]
    let currentChannel = state.entities.channels[state.session.channelId]
    let like = currentChannel && currentChannel.liked && currentChannel.liked.videos ? currentChannel.liked.videos[videoId] : null

    if (like) {
        var liked = like.liked 
        var disliked = like.disliked   
    } else {
        var liked = false
        var disliked = false
    }
    
    let subscribed = false
    if (currentUser && video && video.channel) {
        subscribed = video.channel.subscribers.find(subs => subs.id === state.session.channelId) !== undefined
    }
   
    return {
        videoId: videoId,
        video: video,
        videos: Object.values(state.entities.videos),
        path: ownProps.location.pathname,
        currentUser: currentUser,
        currentChannel: currentChannel,
        like: like,
        liked: liked,
        disliked: disliked,
        subscribed: subscribed
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
    requestCurrentUser: id => dispatch(requestCurrentUser(id)),
    closeModal: () => dispatch(closeModal()),
    requestChannel: channel => dispatch(requestChannel(channel)),
    editChannel: channel => dispatch(editChannel(channel)),
    createSubscription: subscription => dispatch(createSubscription(subscription)),
    deleteSubscription: id => dispatch(deleteSubscription(id)),
    requestCurrentChannel: channelId => dispatch(requestCurrentChannel(channelId))
})

export default connect(mSTP, mDTP)(VideoShow)