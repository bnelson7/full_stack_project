import React from 'react'
import CommentIndexItem from './comment_index_item'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

class CommentIndex extends React.Component {
    constructor(props) {
        
        super(props)

        this.state = {
            expanded: false,
            expandedId: null,
            parentIds: []
        }

        this.mapNestedComments = this.mapNestedComments.bind(this)
        this.handleReplies = this.handleReplies.bind(this)
    }

    componentDidMount() {
        
        this.props.requestComments(this.props.match.params.videoId)
    }

    handleReplies(e) {
        
        e.preventDefault();
        if (!this.state.expanded) {
            let parents = {["id"]: parseInt(e.currentTarget.value, 10)}
            
            console.log(parents)
            this.setState({ 
                expanded: !this.state.expanded, 
                parentIds: Object.values(parents),
                expandedId: e.currentTarget.value
            })
            
        } else {
            let parents = {}
            for (let i = 0; i < this.state.parentIds.length; i++) {
                parents.i = this.state.parentIds[i];
            }
            parents.id = parseInt(e.currentTarget.value, 10)
            
            console.log(this.state.parentIds)
            console.log(e.currentTarget.value)
            this.setState({
                expanded: !this.state.expanded,
                parentIds: Object.values(parents),
                expandedId: e.currentTarget.value
            })
        }
    }

    mapNestedComments(comments) {
        const { editComment, deleteComment, createComment, deleteCommentLike, createCommentLike } = this.props
        const { videoId } = this.props.match.params
        let commentsAndReplies = comments.map(comment => {
            
            if (!this.state.expanded && this.state.expandedId === comment.id) {
                
                return (
                    <div className="comment-index-grid-container">
                        <div className="comment-replies-index-grid-item" id={comment.id}>
                            <CommentIndexItem
                                key={comment.id}
                                comment={comment}
                                editComment={editComment}
                                createComment={createComment}
                                deleteComment={deleteComment}
                                createCommentLike={createCommentLike}
                                deleteCommentLike={deleteCommentLike}
                                videoId={videoId} />
                            {comment.childComments ?
                                <div className="replies-dropdown">
                                    <button onClick={this.handleReplies} value={comment.id}>
                                        <span className="replies-dropdown-caret">{this.state.expanded ? <FaCaretUp /> : <FaCaretDown />}</span>
                                        {comment.childComments.length === 1 ? <span>{this.state.expanded ? "Hide" : "View"} reply</span> : <span>{this.state.expanded ? "Hide" : "View"} {comment.childComments.length} replies</span>}
                                    </button>
                                </div> : null}
                        </div>
                    </div>
                )
            } else {
                
                return (
                    <div className="comment-index-grid-container">
                        <div className="comment-replies-index-grid-item" id={comment.id}>
                            <CommentIndexItem
                                key={comment.id}
                                comment={comment}
                                editComment={editComment}
                                createComment={createComment}
                                deleteComment={deleteComment}
                                createCommentLike={createCommentLike}
                                deleteCommentLike={deleteCommentLike}
                                videoId={videoId} />
                        {comment.childComments ?
                            <div className="replies-dropdown">
                                <button onClick={this.handleReplies} value={comment.id}>
                                    <span className="replies-dropdown-caret">{this.state.expanded && comment.id === this.state.expandedId ? <FaCaretDown /> : <FaCaretUp />}</span> 
                                    {comment.childComments.length === 1 ? <span>{this.state.expanded && comment.id === this.state.expandedId ? "Hide" : "View"} reply</span> : <span>{this.state.expanded ? "Hide" : "View"} {comment.childComments.length} replies</span>}
                                </button>
                            </div> : null}
                        </div>
                        {console.log(this.state.parentIds)}
                        
                        {comment.childComments && this.state.parentIds.includes(comment.childComments[0].parentCommentId) ?
                        <div className="replies-index-grid-container">
                            {this.mapNestedComments(comment.childComments)}
                        </div> : null}
                    </div>
                )
            }
        })
        return commentsAndReplies
    }

    render() {
        const { comments } = this.props
        console.log(this.state)
        
        return (
            <div>
                {this.mapNestedComments(comments)}
            </div>
        )
    }
}

export default CommentIndex;

