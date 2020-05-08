import * as LikeAPIUtil from '../util/like_api_util'

export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS'
export const CLEAR_LIKE_ERRORS = 'CLEAR_LIKE_ERRORS'

const receiveLike = like => {
    debugger
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = likeId => {
    debugger
    return {
        type: REMOVE_LIKE,
        likeId
    }
}

export const createVideoLike = like => dispatch => {
    debugger
    return (
        LikeAPIUtil.createVideoLike(like)
        .then(like => dispatch(receiveLike(like)))
    )
}

export const deleteVideoLike = likeId => dispatch => {
    debugger
    return (
        LikeAPIUtil.deleteVideoLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
    )
}

export const createCommentLike = like => dispatch => {
    debugger
    return (
        LikeAPIUtil.createCommentLike(like)
        .then(like => dispatch(receiveLike(like)))
    )
}

export const deleteCommentLike = likeId => dispatch => {
    debugger
    return (
        LikeAPIUtil.deleteCommentLike(likeId)
        .then(likeId => dispatch(removeLike(likeId)))
    )
}