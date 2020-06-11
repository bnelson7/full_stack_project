import { connect } from 'react-redux'
import UserProfile from '../user/user_profile'
import { requestChannel, createSubscription, deleteSubscription } from '../../actions/channel_actions'
import { withRouter } from 'react-router-dom'

const mstp = (state, ownProps) => {
    
    let channel = Object.keys(state.entities.channels).length && 
    state.entities.channels[ownProps.match.params.channelId]
    let randomIdx = channel.uploads && Math.floor(Math.random() * channel.uploads.length)
    let video = channel.uploads && channel.uploads[randomIdx]
    let videos = channel.uploads && channel.uploads
    let currentUser = state.entities.users[state.session.id]
    let subscribed = currentUser && Object.keys(state.entities.channels).length && 
    channel.subscribers.find(subs => subs.id === currentUser.id) !== undefined
    
    
    return {
        channels: Object.values(state.entities.channels),
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
    deleteSubscription: id => dispatch(deleteSubscription(id))
})

export default withRouter(connect(mstp, mdtp)(UserProfile))
