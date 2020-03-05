import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

const userReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, defaultState, { [action.user.id]: action.user })
        default:
            return defaultState
    }
}

export default userReducer;