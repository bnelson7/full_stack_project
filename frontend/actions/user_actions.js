import * as UserAPIUtil from '../util/user_api_util'
import { receiveCurrentUser } from './session_actions'

export const updateUser = (user, id) => dispatch => {
    
    return (
        UserAPIUtil.updateUser(user, id)
        .then(user => dispatch(receiveCurrentUser(user)))
    )
}

export const requestUser = id => dispatch => {
    
    return (
        UserAPIUtil.fetchUser(id)
        .then(user => dispatch(receiveCurrentUser(user)))
    )
}