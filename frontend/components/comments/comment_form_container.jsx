import { connect } from 'react-redux'
import { createComment } from '../../actions/comment_actions'
import CommentForm from './comment_form'
import { withRouter } from 'react-router-dom'

const mstp = state => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        comments: Object.values(state.entities.comments)
    }
}

const mdtp = dispatch => {
    
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default withRouter(connect(mstp, mdtp)(CommentForm));