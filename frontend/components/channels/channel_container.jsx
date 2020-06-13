import { connect } from 'react-redux'
import Channel from './channel'
import { requestChannel, requestChannels, createSubscription, deleteSubscription } from '../../actions/channel_actions'
import { withRouter } from 'react-router-dom'
import { editChannel } from '../../actions/channel_actions'
import { openModal } from '../../actions/modal_actions'
import { createVideo, deleteVideo, updateVideo } from '../../actions/video_actions'
import { requestUser } from '../../actions/user_actions'

const mstp = (state, ownProps) => {
    
    let channel = Object.keys(state.entities.channels).length ? 
    state.entities.channels[ownProps.match.params.channelId] : null
    let randomIdx = channel && channel.uploads ? Math.floor(Math.random() * channel.uploads.length) : null
    let video = channel && channel.uploads && channel.uploads[randomIdx]
    let videos = channel && channel.uploads && channel.uploads
    let currentUser = state.entities.users[state.session.id]
    let subscribed = currentUser && Object.keys(state.entities.channels).length && 
    channel && channel.subscribers.find(subs => subs.id === currentUser.id) !== undefined
    debugger
    let creator = Object.keys(state.entities.users).length && channel && state.entities.users[channel.creatorId] 
    let channels = creator && creator.channels && channel && creator.channels.filter(chan => chan.id !== channel.id ) 
    debugger
    return {
        channels: channels,
        channel: channel,
        currentUser: currentUser,
        path: ownProps.location.pathname,
        videos: videos,
        video: video,
        subscribed: subscribed
    }
}

const mdtp = dispatch => ({
    requestChannel: id => dispatch(requestChannel(id)),
    createSubscription: subscription => dispatch(createSubscription(subscription)),
    deleteSubscription: id => dispatch(deleteSubscription(id)),
    editChannel: (channel, id) => dispatch(editChannel(channel, id)),
    openModal: modal => dispatch(openModal(modal)),
    createVideo: video => dispatch(createVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    requestUser: id => dispatch(requestUser(id))
    // requestChannels: () => dispatch(requestChannels())
})

export default withRouter(connect(mstp, mdtp)(Channel))
