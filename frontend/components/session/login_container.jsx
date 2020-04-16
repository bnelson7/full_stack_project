import { connect } from 'react-redux'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { login } from '../../actions/session_actions'
import LoginForm from './login_form'

const mSTP = ({ errors }) => ({
    errors: errors.session,
    signUpLink: <NavLink to="/signup">Create account</NavLink>
})

const mDTP = dispatch => ({
    loginUser: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(LoginForm)