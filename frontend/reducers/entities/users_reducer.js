import { RECEIVE_CURRENT_USER } from "../../actions/session_actions"
import { RECEIVE_USER } from "../../actions/user_actions"

const usersReducer = (prevState = {}, action) => {
    Object.freeze(prevState)
    let nextState = Object.assign({}, prevState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, prevState, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_USER:
            
            nextState[action.user.id] = action.user
            return nextState
        default:
            return prevState
    }
}

export default usersReducer;