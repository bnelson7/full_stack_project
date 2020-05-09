import * as CommentAPIUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS'

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => {
    
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = comment => {
    
    return {
        type: REMOVE_COMMENT,
        comment
    }
}

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})

export const requestComments = (videoId) => dispatch => {
    
    return (
        CommentAPIUtil.fetchComments(videoId)
        .then(comments => dispatch(receiveComments(comments)))
    )
}

export const requestComment = id => dispatch => {
    return (
        CommentAPIUtil.fetchComment()
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const createComment = comment => dispatch => {
    
    return (
        CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const editComment = comment => dispatch => {
    
    return (
        CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const deleteComment = commentId => dispatch => {
    
    return (
        CommentAPIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
    )
}