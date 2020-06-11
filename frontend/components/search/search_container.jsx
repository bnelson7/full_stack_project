import { connect } from 'react-redux'
import { requestQueriedVideos } from '../../actions/video_actions'
import { requestQueriedChannel, requestQueriedChannels, createSubscription, deleteSubscription } from '../../actions/channel_actions'
import { requestUser } from '../../actions/user_actions'
import Search from './search'

const mstp = (state, ownProps) => {
    debugger
    return {
        path: ownProps.location.pathname,
        currentUser: state.entities.users[state.session.id]
    }
}

const mdtp = dispatch => ({
    requestQueriedVideos: queryString => dispatch(requestQueriedVideos(queryString)),
    requestQueriedChannel: queryString => dispatch(requestQueriedChannel(queryString)),
    requestQueriedChannels: queryString => dispatch(requestQueriedChannels(queryString)),
    requestUser: id => dispatch(requestUser(id)),
    createSubscription: subscription => dispatch(createSubscription(subscription)),
    deleteSubscription: id => dispatch(deleteSubscription(id))
})

export default connect(mstp, mdtp)(Search)