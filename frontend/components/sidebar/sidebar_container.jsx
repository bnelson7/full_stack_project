import { connect } from 'react-redux'
import Sidebar from './sidebar'
import { requestCurrentUser } from '../../actions/user_actions'
import { requestCurrentChannel } from '../../actions/channel_actions'

const mstp = (state, ownProps) => {
    
    return {
        path: ownProps.location.pathname,
        modal: state.ui.type,
        currentUser: state.entities.users[state.session.id],
        currentChannel: state.entities.channels[state.session.channelId]
    }
}

const mdtp = dispatch => ({
    requestCurrentUser: id => dispatch(requestCurrentUser(id)),
    requestCurrentChannel: channelId => dispatch(requestCurrentChannel(channelId))
})

export default connect(mstp, mdtp)(Sidebar)