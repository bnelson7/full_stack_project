import { connect } from 'react-redux'
import { requestComment, requestComments, deleteComment, editComment } from "../../actions/comment_actions";
import CommentIndex from './comment_index'

const mstp = (state, ownProps) => {
    debugger
    return {
        comments: Object.values(state.entities.comments),
        // comment: state.entities.comments[ownProps.match.params.commentId]
    }
}

const mdtp = dispatch => {
    return {
        requestComments: () => dispatch(requestComments()),
        requestComment: commentId => dispatch(requestComment(commentId)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        editComment: commentId => dispatch(editComment(commentId))
    }
}

export default connect(mstp, mdtp)(CommentIndex)