import { connect } from 'react-redux'
import UserProfile from './user_profile'
import { createVideo, requestVideos, deleteVideo, updateVideo, requestVideo } from '../../actions/video_actions'
import { requestUser } from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id]
    let randomIdx = currentUser.uploads && Math.floor(Math.random() * currentUser.uploads.length)
    let video = currentUser.uploads && currentUser.uploads[randomIdx]
    let videos = currentUser.uploads && currentUser.uploads

    // let channel = null
    // let subscribed = false
    // if (video && video.channel && Object.keys(state.entities.channels).length) {
    //     debugger
    //     channel = state.entities.channels[video.channelId]
    //     subscribed = channel.subscribers.find(subs => subs.id === currentUser.id) !== undefined
    // }

    return ({
        currentUser: currentUser,
        videos: videos,
        path: ownProps.location.pathname,
        video: video,
        // channel: channel,
        // subscribed: subscribed
    })
}

const mDTP = dispatch => {
     
    return {
        createVideo: video => dispatch(createVideo(video)),
        requestVideos: () => dispatch(requestVideos()),
        deleteVideo: videoId => dispatch(deleteVideo(videoId)),
        updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
        requestUser: id => dispatch(requestUser(id)),
        requestVideo: id => dispatch(requestVideo(id)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default withRouter(connect(mSTP, mDTP)(UserProfile))