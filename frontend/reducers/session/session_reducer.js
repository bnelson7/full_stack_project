import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_CURRENT_CHANNEL } from '../../actions/channel_actions'

const _nullUser = Object.freeze({ id: null, channelId: null })


const sessionReducer = (prevState = _nullUser , action) => {
    Object.freeze(prevState)
    let nextState = Object.assign({}, prevState)
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id }
        case LOGOUT_CURRENT_USER:
            return _nullUser
        case RECEIVE_CURRENT_CHANNEL:
            
            // maybe move this to session reducer
            return Object.assign({}, prevState, { channelId: action.currentChannel.id })
        default:
            return prevState
    }
}

export default sessionReducer