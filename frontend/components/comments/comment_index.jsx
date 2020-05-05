import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.mapNestedComments = this.mapNestedComments.bind(this)
    }

    componentDidMount() {
        debugger
        this.props.requestComments(this.props.match.params.videoId)
    }

    mapNestedComments(comments) {
        const { editComment, deleteComment, createComment } = this.props
        const { videoId } = this.props.match.params
        let commentsAndReplies = comments.map(comment => {
            return (
                <div className="comment-index-grid-item">
                    <CommentIndexItem
                        key={comment.id}
                        comment={comment}
                        editComment={editComment}
                        deleteComment={deleteComment}
                        createComment={createComment}
                        videoId={videoId} />
                    {comment.childComments && this.mapNestedComments(comment.childComments)}
                </div>
            )
        })
        return commentsAndReplies
    }

    render() {
        const { comments } = this.props
        debugger
        return (
            <div className="comment-index-grid-container">
                {this.mapNestedComments(comments)}
            </div>
        )
    }
}

export default CommentIndex;

