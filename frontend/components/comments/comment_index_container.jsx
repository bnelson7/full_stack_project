import { connect } from 'react-redux'
import { requestComment, requestComments, deleteComment, editComment } from "../../actions/comment_actions";
import CommentIndex from './comment_index'
import { withRouter } from 'react-router-dom'

const mstp = (state, ownProps) => {
    debugger
    return {
        comments: Object.values(state.entities.comments),
        // comment: state.entities.comments[ownProps.match.params.commentId]
    }
}

const mdtp = dispatch => {
    return {
        requestComments: videoId => dispatch(requestComments(videoId)),
        requestComment: commentId => dispatch(requestComment(commentId)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        editComment: commentId => dispatch(editComment(commentId))
    }
}

export default withRouter(connect(mstp, mdtp)(CommentIndex))