import * as UserAPIUtil from '../util/user_api_util'
import { receiveCurrentUser } from './session_actions'

export const updateUser = user => dispatch => {
    
    return (
        UserAPIUtil.updateUser(user)
        .then(user => dispatch(receiveCurrentUser(user)))
    )
}