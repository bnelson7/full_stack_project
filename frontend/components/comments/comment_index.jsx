import React from 'react'
import CommentIndexItem from './comment_index_item'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

class CommentIndex extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
            expanded: false,
            parentId: null
        }

        this.mapNestedComments = this.mapNestedComments.bind(this)
        this.handleReplies = this.handleReplies.bind(this)
    }

    componentDidMount() {
        debugger
        this.props.requestComments(this.props.match.params.videoId)
    }

    handleReplies(e) {
        debugger
        e.preventDefault();
        this.setState({ 
            expanded: !this.state.expanded, 
            parentId: e.currentTarget.value
        })
    }

    mapNestedComments(comments) {
        const { editComment, deleteComment, createComment } = this.props
        const { videoId } = this.props.match.params
        let commentsAndReplies = comments.map(comment => {
            debugger
            return (
                <div className="comment-index-grid-container">
                    <div className="comment-replies-index-grid-item" id={comment.id}>
                        <CommentIndexItem
                            key={comment.id}
                            comment={comment}
                            editComment={editComment}
                            deleteComment={deleteComment}
                            createComment={createComment}
                            videoId={videoId} />
                    {comment.childComments ?
                        <div className="replies-dropdown">
                            <button onClick={this.handleReplies} value={comment.id}>
                                <span className="replies-dropdown-caret">{this.state.expanded ? <FaCaretUp /> : <FaCaretDown />}</span> 
                                {comment.childComments.length === 1 ? <span>{this.state.expanded ? "Hide" : "View"} reply</span> : <span>{this.state.expanded ? "Hide" : "View"} {comment.childComments.length} replies</span>}
                            </button>
                        </div> : null}
                    </div>
                    {console.log(this.state.parentId)}
                    {comment.childComments && this.state.expanded || (this.state.expanded && this.state.parentId === comment.parentCommentId) ?
                    <div className="replies-index-grid-container">
                    {console.log(comment.childComments[0].parentCommentId)}
                        {this.mapNestedComments(comment.childComments)}
                    </div> : null}
                </div>
            )
        })
        return commentsAndReplies
    }

    render() {
        const { comments } = this.props
        console.log(this.state)
        debugger
        return (
            <div>
                {this.mapNestedComments(comments)}
            </div>
        )
    }
}

export default CommentIndex;

