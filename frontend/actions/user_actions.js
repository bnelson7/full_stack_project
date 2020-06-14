import * as UserAPIUtil from '../util/user_api_util'
import { receiveCurrentUser } from './session_actions'

export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = user => {
debugger
    return {
        type: RECEIVE_USER,
        user
    }
}

export const updateUser = (user, id) => dispatch => {
    
    return (
        UserAPIUtil.updateUser(user, id)
        .then(user => dispatch(receiveCurrentUser(user)))
    )
}

export const requestUser = id => dispatch => {
    debugger
    return (
        UserAPIUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)))
    )
}
export const requestCurrentUser = id => dispatch => {
    debugger
    return (
        UserAPIUtil.fetchUser(id)
        .then(user => dispatch(receiveCurrentUser(user)))
    )
}