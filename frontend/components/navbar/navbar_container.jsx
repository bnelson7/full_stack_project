import { connect } from 'react-redux'
import NavBar from './navbar'
import { logout } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'
import { requestVideos } from '../../actions/video_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import { requestCurrentUser } from '../../actions/user_actions'
import { requestCurrentChannel } from '../../actions/channel_actions'

const mSTP = (state, ownProps) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        path: ownProps.location.pathname,
        modal: state.ui.type,
        currentChannel: state.entities.channels[state.session.channelId]
    }
}

const mDTP = dispatch => {
    
    return {
        logout: () => dispatch(logout()),
        requestVideos: () => dispatch(requestVideos()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        requestCurrentUser: id => dispatch(requestCurrentUser(id)),
        requestCurrentChannel: id => dispatch(requestCurrentChannel(id))
    }
}

export default withRouter(connect(mSTP, mDTP)(NavBar))