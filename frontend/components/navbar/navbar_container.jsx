import { connect } from 'react-redux'
import NavBar from './navbar'
import { logout } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'
import { requestVideos } from '../../actions/video_actions'

const mSTP = state => {

    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    requestVideos: () => dispatch(requestVideos())
})

export default withRouter(connect(mSTP, mDTP)(NavBar))