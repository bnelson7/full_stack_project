import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.user[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Welcome)