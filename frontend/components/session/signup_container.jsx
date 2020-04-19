import { connect } from "react-redux"
import { signup } from "../../actions/session_actions"
import SignupForm from "./signup_form"

const mSTP = state => ({
    errors: state.errors.session
})

const mDTP = dispatch => ({
    createNewUser: newUser => dispatch(signup(newUser))
})

export default connect(mSTP, mDTP)(SignupForm)