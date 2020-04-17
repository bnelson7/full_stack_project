import { connect } from 'react-redux'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { login } from '../../actions/session_actions'
import LoginForm from './login_form'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session
})

const mDTP = dispatch => ({
    loginUser: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(LoginForm)