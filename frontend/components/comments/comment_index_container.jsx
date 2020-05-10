import { connect } from 'react-redux'
import { requestComment, requestComments, deleteComment, editComment, createComment } from "../../actions/comment_actions";
import { createCommentLike, deleteCommentLike } from '../../actions/like_actions'
import CommentIndex from './comment_index'
import { withRouter } from 'react-router-dom'

const mstp = (state, ownProps) => {
    debugger
    return {
        comments: Object.values(state.entities.comments)
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
        deleteCommentLike: id => dispatch(deleteCommentLike(id))
    }
}

export default withRouter(connect(mstp, mdtp)(CommentIndex))