import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

const usersReducer = (prevState = {}, action) => {
    Object.freeze(prevState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, prevState, { [action.user.id]: action.user })
        default:
            return prevState
    }
}

export default usersReducer;