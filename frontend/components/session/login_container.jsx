import { connect } from 'react-redux'
import { login, loginDemoUser, clearSessionErrors } from '../../actions/session_actions'
import LoginForm from './login_form'
import { closeModal } from '../../actions/modal_actions'

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    }
}

const mDTP = dispatch => ({
    loginUser: user => dispatch(login(user)),
    loginDemoUser: () => dispatch(loginDemoUser()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(LoginForm)