import { connect } from 'react-redux'
import { requestQueriedVideos } from '../../actions/video_actions'
import { requestQueriedChannel, requestQueriedChannels, createSubscription, deleteSubscription } from '../../actions/channel_actions'
import { requestCurrentUser } from '../../actions/user_actions'
import Search from './search'

const mstp = (state, ownProps) => {
    
    return {
        path: ownProps.location.pathname,
        currentUser: state.entities.users[state.session.id],
        modal: state.ui
    }
}

const mdtp = dispatch => ({
    requestQueriedVideos: queryString => dispatch(requestQueriedVideos(queryString)),
    requestQueriedChannel: queryString => dispatch(requestQueriedChannel(queryString)),
    requestQueriedChannels: queryString => dispatch(requestQueriedChannels(queryString)),
    requestCurrentUser: id => dispatch(requestCurrentUser(id)),
    createSubscription: subscription => dispatch(createSubscription(subscription)),
    deleteSubscription: id => dispatch(deleteSubscription(id))
})

export default connect(mstp, mdtp)(Search)