import { connect } from 'react-redux'
import Channel from './channel'
import { requestChannel, requestCurrentChannel, createSubscription, deleteSubscription, editChannel } from '../../actions/channel_actions'
import { withRouter } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions'
import { createVideo, deleteVideo, updateVideo } from '../../actions/video_actions'
import { requestUser } from '../../actions/user_actions'

const mstp = (state, ownProps) => {
    
    let currentUser = state.entities.users[state.session.id]
    let currentChannel = state.entities.channels[state.session.channelId]
    let channel = Object.keys(state.entities.channels).length && state.entities.channels[ownProps.match.params.channelId]
    
    if (channel && channel.hasOwnProperty('subscriptions')) {
        channel = state.entities.channels[ownProps.match.params.channelId]
    } else {
        channel = null
    }
    let randomIdx = channel && channel.uploads ? Math.floor(Math.random() * channel.uploads.length) : null
    let video = channel && channel.uploads && channel.uploads[randomIdx]
    let videos = channel && channel.uploads && channel.uploads
    let subscribed = currentUser && Object.keys(state.entities.channels).length && 
    channel && channel.subscribers.find(subs => subs.id === state.session.channelId) !== undefined
    
    let creator = Object.keys(state.entities.users).length && channel && state.entities.users[channel.creatorId] 
    let channels = creator && creator.channels && channel && creator.channels.filter(chan => chan.id !== channel.id ) 
    
    let allChannels = Object.values(state.entities.channels)
    let featuredChannel = currentChannel && Object.keys(state.entities.channels).length > 2 && 
    currentChannel.subscriptions && allChannels.find(subs => subs.id === currentChannel.subscriptions[0].id) !== undefined ? 
    currentChannel.subscriptions[0] : null
    
    let featuredChannelSubscribed = featuredChannel && currentChannel && currentChannel.subscriptions.find(subs => subs.id === featuredChannel.id) !== undefined
     
    return {
        channels: channels,
        channel: channel,
        currentUser: currentUser,
        path: ownProps.location.pathname,
        videos: videos,
        video: video,
        subscribed: subscribed,
        currentChannel: currentChannel,
        featuredChannel: featuredChannel,
        featuredChannelSubscribed,
        creator: creator,
        allChannels: allChannels
    }
}

const mdtp = dispatch => ({
    requestChannel: id => dispatch(requestChannel(id)),
    createSubscription: subscription => dispatch(createSubscription(subscription)),
    deleteSubscription: subscriptionId => dispatch(deleteSubscription(subscriptionId)),
    editChannel: (channel, id) => dispatch(editChannel(channel, id)),
    openModal: modal => dispatch(openModal(modal)),
    createVideo: video => dispatch(createVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    requestUser: id => dispatch(requestUser(id)),
    requestCurrentChannel: channelId => dispatch(requestCurrentChannel(channelId))
})

export default withRouter(connect(mstp, mdtp)(Channel))
