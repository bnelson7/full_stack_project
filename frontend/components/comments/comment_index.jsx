import React from 'react'
import CommentIndexItem from './comment_index_item'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
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
        const { editComment, deleteComment, createComment, deleteCommentLike, createCommentLike, currentUser, requestUser, likes, requestComments } = this.props
        const { videoId } = this.props.match.params
        let commentsAndReplies = comments.map(comment => {
            return (
                <div className="comment-index-grid-container" key={comment.id}>
                    <div className="comment-replies-index-grid-item" id={comment.id}>
                        <CommentIndexItem
                            comment={comment}
                            editComment={editComment}
                            createComment={createComment}
                            deleteComment={deleteComment}
                            createCommentLike={createCommentLike}
                            deleteCommentLike={deleteCommentLike}
                            requestComments={requestComments}
                            videoId={videoId}
                            currentUser={currentUser}
                            requestUser={requestUser}
                            like={likes && likes[comment.id] ? likes[comment.id] : null}
                            liked={likes && likes[comment.id] ? likes[comment.id].liked : false}
                            disliked={likes && likes[comment.id] ? likes[comment.id].disliked : false}
                            />
                    {comment.replies ?
                        <div className="replies-dropdown">
                            <button onClick={this.handleReplies} value={comment.id}>
                                <span className="replies-dropdown-caret">{this.state.parentIds.includes(comment.id) ? <FaCaretUp /> : <FaCaretDown />}</span> 
                                {comment.replies.length === 1 ? <span>{this.state.parentIds.includes(comment.id) ? "Hide" : "View"} reply</span> : <span>{this.state.parentIds.includes(comment.id) ? "Hide" : "View"} {comment.replies.length} replies</span>}
                            </button>
                        </div> : null}
                    </div>
                    {comment.replies && this.state.parentIds.includes(comment.replies[0].parentCommentId) ?
                    <div className="replies-index-grid-container">
                        {this.mapNestedComments(comment.replies)}
                    </div> : null}
                </div>
            )
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

