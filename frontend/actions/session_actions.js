import * as SessionAPIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
    .then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => {
    return (
        SessionAPIUtil.login(user)
        .then(user => (
            dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveSessionErrors(err.responseJSON))
        ))
    )
};

const demoUser = {
    email: 'demouser@gmail.com',
    password: 'password'
}

export const loginDemoUser = () => dispatch => {
    
   return dispatch(login(demoUser))
   
}

export const logout = () => dispatch => {
    
    return (
        SessionAPIUtil.logout()
        .then(user => (
            dispatch(logoutCurrentUser())
        ))
    )
};
