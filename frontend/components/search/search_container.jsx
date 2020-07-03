import { connect } from 'react-redux'
import { requestQueriedVideos } from '../../actions/video_actions'
import { requestQueriedChannel, requestQueriedChannels, createSubscription, deleteSubscription, requestCurrentChannel } from '../../actions/channel_actions'
import { requestCurrentUser } from '../../actions/user_actions'
import Search from './search'

const mstp = (state, ownProps) => {
    
    let currentChannel = state.entities.channels[state.session.channelId]
    let channels = Object.values(state.entities.channels)
    // 
    // let isNoCurrentChannel = channels && currentChannel === undefined
    // 
    return {
        path: ownProps.location.pathname,
        currentUser: state.entities.users[state.session.id],
        modal: state.ui,
        videos: Object.values(state.entities.videos),
        currentChannel: currentChannel,
        channels: channels,
        // isNoCurrentChannel: isNoCurrentChannel
    }
}

const mdtp = dispatch => ({
    requestQueriedVideos: queryString => dispatch(requestQueriedVideos(queryString)),
    requestQueriedChannel: queryString => dispatch(requestQueriedChannel(queryString)),
    requestQueriedChannels: queryString => dispatch(requestQueriedChannels(queryString)),
    requestCurrentUser: id => dispatch(requestCurrentUser(id)),
    createSubscription: subscription => dispatch(createSubscription(subscription)),
    deleteSubscription: id => dispatch(deleteSubscription(id)),
    requestCurrentChannel: channelId => dispatch(requestCurrentChannel(channelId))
})

export default connect(mstp, mdtp)(Search)