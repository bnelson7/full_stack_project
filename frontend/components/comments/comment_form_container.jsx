import { connect } from 'react-redux'
import { createComment } from '../../actions/comment_actions'
import CommentForm from './comment_form'
import { withRouter } from 'react-router-dom'

const mstp = state => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments
    }
}

const mdtp = dispatch => {
    debugger
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default withRouter(connect(mstp, mdtp)(CommentForm));