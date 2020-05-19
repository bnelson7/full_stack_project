import { connect } from 'react-redux'
import NavBar from './navbar'
import { logout } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'
import { requestVideos } from '../../actions/video_actions'
import { openModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        path: ownProps.location.pathname
    }
}

const mDTP = dispatch => {
    
    return {
        logout: () => dispatch(logout()),
        requestVideos: () => dispatch(requestVideos()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default withRouter(connect(mSTP, mDTP)(NavBar))