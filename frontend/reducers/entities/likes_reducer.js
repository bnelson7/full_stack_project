import { RECEIVE_LIKE, REMOVE_LIKE } from '../../actions/like_actions'

const likesReducer = (prevState = {}, action) => {
    Object.freeze(prevState)
    let nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_LIKE:
            debugger
            nextState[action.like.id] = action.like
            return nextState;
        case REMOVE_LIKE:
            
            delete nextState[action.like]
            return nextState;
        default:
            return prevState;
    }
}

export default likesReducer;