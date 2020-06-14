import { connect } from 'react-redux'
import { requestComment, requestComments, deleteComment, editComment, createComment } from "../../actions/comment_actions";
import { createCommentLike, deleteCommentLike } from '../../actions/like_actions'
import { requestCurrentUser } from '../../actions/user_actions'
import CommentIndex from './comment_index'
import { withRouter } from 'react-router-dom'

const mstp = state => {
    let currentUser = state.entities.users[state.session.id]
    let likes = currentUser && currentUser.liked && currentUser.liked.comments ? currentUser.liked.comments : null
    return {
        comments: Object.values(state.entities.comments),
        currentUser: currentUser,
        likes: likes
    }
}

const mdtp = dispatch => {
    return {
        requestComments: videoId => dispatch(requestComments(videoId)),
        requestComment: commentId => dispatch(requestComment(commentId)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        editComment: commentId => dispatch(editComment(commentId)),
        createComment: comment => dispatch(createComment(comment)),
        createCommentLike: like => dispatch(createCommentLike(like)),
        deleteCommentLike: id => dispatch(deleteCommentLike(id)),
        requestCurrentUser: id => dispatch(requestCurrentUser(id)),
    }
}

export default withRouter(connect(mstp, mdtp)(CommentIndex))