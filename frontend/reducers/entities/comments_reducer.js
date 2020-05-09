import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions'

const commentsReducer = (prevState = {}, action) => {
    Object.freeze(prevState)
    let nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_COMMENTS:
            
            return action.comments;
        case RECEIVE_COMMENT:
            
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            
            delete nextState[action.comment]
            return nextState;
        default:
            return prevState;
    }
}

export default commentsReducer;