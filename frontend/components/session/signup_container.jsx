import { connect } from "react-redux"
import { signup } from "../../actions/session_actions"
import SignupForm from "./signup_form"

const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(signup(formUser))
})

export default connect(null, mDTP)(SignupForm)