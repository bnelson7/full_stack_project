import { connect } from 'react-redux'
import NavBar from './navbar'
import { logout } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'
import { requestVideos } from '../../actions/video_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import { requestCurrentUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        path: ownProps.location.pathname,
        modal: state.ui.type
    }
}

const mDTP = dispatch => {
    
    return {
        logout: () => dispatch(logout()),
        requestVideos: () => dispatch(requestVideos()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        requestCurrentUser: id => dispatch(requestCurrentUser(id))
    }
}

export default withRouter(connect(mSTP, mDTP)(NavBar))