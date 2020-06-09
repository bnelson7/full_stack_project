import { connect } from "react-redux"
import { signup, clearSessionErrors } from "../../actions/session_actions"
import SignupForm from "./signup_form"
import { createChannel } from '../../actions/channel_actions'

const mSTP = state => ({
    errors: state.errors.session
})

const mDTP = dispatch => ({
    createNewUser: newUser => dispatch(signup(newUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    createChannel: channel => dispatch(createChannel(channel))
})

export default connect(mSTP, mDTP)(SignupForm)