import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
    constructor(props) {
        debugger
        super(props)

    }

    componentDidMount() {
        debugger
        this.props.requestComments(this.props.match.params.videoId)
    }

    render() {
        const { comments, editComment, deleteComment, createComment } = this.props
        const { videoId } = this.props.match.params
        debugger
        return (
            <div className="comment-index-grid-container">
                {comments.map(comment => {
                 return (
                     <li className="comment-index-grid-item">
                         <CommentIndexItem key={comment.id} comment={comment} editComment={editComment} deleteComment={deleteComment} createComment={createComment} videoId={videoId}/>
                     </li>
                 )   
                })}
            </div>
        )
    }
}

export default CommentIndex;