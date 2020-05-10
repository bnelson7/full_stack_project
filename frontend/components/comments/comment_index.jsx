import React from 'react'
import CommentIndexItem from './comment_index_item'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

class CommentIndex extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
            expandedId: null,
            parentIds: []
        }

        this.mapNestedComments = this.mapNestedComments.bind(this)
        this.handleReplies = this.handleReplies.bind(this)
    }

    componentDidMount() {
        debugger
        this.props.requestComments(this.props.match.params.videoId)
    }

    handleReplies(e) {
        e.preventDefault();
 
        if (!this.state.expandedId && this.state.parentIds.length === 0) {
            let parents = {["id"]: parseInt(e.currentTarget.value, 10)}
    
            this.setState({  
                parentIds: Object.values(parents),
                expandedId: parseInt(e.currentTarget.value, 10)
            })
            
        } else if (this.state.parentIds.includes(parseInt(e.currentTarget.value, 10))) {
            let removeIdx = this.state.parentIds.indexOf(parseInt(e.currentTarget.value, 10))
            let parentsLeft = this.state.parentIds.slice(0, removeIdx)
         
            let parents = {}
            for (let i = 0; i < parentsLeft.length; i++) {
                parents.i = parentsLeft[i];
            }
            let newParents = Object.values(parents)
            let last = newParents[newParents.length - 1]
            
            this.setState({ 
                parentIds: newParents,
                expandedId: last
            })
        } else {
            let parents = {}
            for (let i = 0; i < this.state.parentIds.length; i++) {
                parents.i = this.state.parentIds[i];
            }
            parents.id = parseInt(e.currentTarget.value, 10)
          
            this.setState({
                parentIds: Object.values(parents),
                expandedId: e.currentTarget.value
            })
        }
    }

    mapNestedComments(comments) {
        const { editComment, deleteComment, createComment, deleteCommentLike, createCommentLike } = this.props
        const { videoId } = this.props.match.params
        let commentsAndReplies = comments.map(comment => {
            debugger
            if (!this.state.parentIds.length === 0) {
                debugger
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
                                        <span className="replies-dropdown-caret"><FaCaretDown /></span>
                                        {comment.childComments.length === 1 ? <span>View reply</span> : <span>View {comment.childComments.length} replies</span>}
                                    </button>
                                </div> : null}
                        </div>
                    </div>
                )
            } else {
                debugger
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
                                    {console.log(this.state)}
                                    {console.log(comment.id)}
                                    <span className="replies-dropdown-caret">{this.state.parentIds.includes(comment.id) ? <FaCaretUp /> : <FaCaretDown />}</span> 
                                    {comment.childComments.length === 1 ? <span>{this.state.parentIds.includes(comment.id) ? "Hide" : "View"} reply</span> : <span>{this.state.parentIds.includes(comment.id) ? "Hide" : "View"} {comment.childComments.length} replies</span>}
                                </button>
                            </div> : null}
                        </div>
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
        
        return (
            <div>
                {this.mapNestedComments(comments)}
            </div>
        )
    }
}

export default CommentIndex;

