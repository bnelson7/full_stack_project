import React from 'react'
import CommentIndexItem from './comment_index_item'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
// import Moment from 'react-moment'

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            parentIds: [],
            sorted: null
        }

        this.mapNestedComments = this.mapNestedComments.bind(this)
        this.handleReplies = this.handleReplies.bind(this)
        this.sortComments = this.sortComments.bind(this)
    }

    componentDidMount() {
        this.props.requestComments(this.props.match.params.videoId)
    }

    static getDerivedStateFromProps(props, state) {
        if (props.sorted !== state.sorted) {
            return {
                sorted: props.sorted
            }
        }
        return null;
    }

    handleReplies(e) {
        e.preventDefault();
    // possible addition: check if parent expanded has any replies expanded before closing
    // might need to add if statement indside if if parents includes what was clicked on and what was clicked on
    // has any replies to replies of the parent and then find and remove that second parent from the array
    // probably would loop through replies check if its in parents and remove also from parents and recursively call again
    // to account for infinite levels of nesting so bascially when you click on top most level of parent every subsequent parent 
    // and replies currently expanded gets collapsed
        let parents = this.state.parentIds
        let newParent = parseInt(e.currentTarget.value, 10)
        if (this.state.parentIds.includes(newParent)) {
            let removeIdx = parents.indexOf(newParent)
            let removed = parents.splice(removeIdx, 1)
            this.setState({ 
                parentIds: parents
            })
        } else {
            parents.push(newParent)
            this.setState({
                parentIds: parents
            })
        }
    }

    sortComments(comments) {
        if (this.state.sorted === 'Newest first') {
            comments.sort((a, b) => -a.createdAt.localeCompare(b.createdAt))
        } else {
            comments.sort((a, b) => b.likes.like - a.likes.like)
        }
    }

    mapNestedComments(comments) {
        const { editComment, 
            deleteComment, 
            createComment, 
            deleteCommentLike, 
            createCommentLike, 
            currentUser,
            currentChannel, 
            requestCurrentUser,
            requestCurrentChannel, 
            likes, 
            requestComments, 
            history } = this.props
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
                            currentChannel={currentChannel}
                            requestCurrentUser={requestCurrentUser}
                            requestCurrentChannel={requestCurrentChannel}
                            history={history}
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
        (!this.state.sorted) ? this.props.comments : this.sortComments(this.props.comments)

        return (
            <div>
                {this.mapNestedComments(this.props.comments)}
            </div>
        )
    }
}

export default CommentIndex;

