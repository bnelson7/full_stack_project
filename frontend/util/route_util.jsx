import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Redirect } from 'react-router-dom'

const Auth = ({ component: Component, path, userLoggedIn, exact }) => (
    <Route path={path} exact={exact} render={props => (
        !userLoggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
            )
        )} />
);

const mSTP = state => ({ 
    userLoggedIn: Boolean(state.session.id) 
});

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));