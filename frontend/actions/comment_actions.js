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
    debugger
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})

export const requestComments = (videoId) => dispatch => {
    debugger
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
    debugger
    return (
        CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const editComment = comment => dispatch => {
    debugger
    return (
        CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const deleteComment = id => dispatch => {
    debugger
    return (
        CommentAPIUtil.deleteComment(id)
        .then(() => dispatch(removeComment()))
    )
}