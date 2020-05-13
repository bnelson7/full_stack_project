import React from 'react'
import CommentFormContainer from './comment_form_container'
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io'
import { MdMoreVert } from 'react-icons/md'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: this.props.comment.body,
            id: this.props.comment.id,
            videoId: this.props.videoId,
            edited: this.props.comment.edited,
            editing: false,
            replying: false,
            clicked: false,
            commentDropdown: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleReply = this.handleReply.bind(this)
        this.handleLike = this.handleLike.bind(this)
        this.handleDropdown = this.handleDropdown.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.replying) {
            const editedComment = Object.assign({}, this.state)
            this.props.editComment(editedComment)
            .then(() => {
                this.setState({
                    edited: this.props.comment.edited, 
                    editing: false
                })
            })
        } else {
            const reply = Object.assign({}, this.state)
            this.props.createComment(reply)
            .then(() => {
                this.setState({
                  editing: false,
                  replying: false
                })
            })
        }
    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id)
    }

    handleEdit(e) {
        e.preventDefault();
        this.setState({ 
            body: this.props.comment.body,
            editing: true,
            replying: false,
            clicked: true 
        })
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({ 
            editing: false,
            replying: false,
            clicked: false
        })
    }

    handleReply(e) {
        e.preventDefault();
        this.setState({ 
            body: "",
            editing: false,
            replying: true,
            clicked: true
        })
    }

    handleLike(e) {
        e.preventDefault();
        const { currentUser, history, liked, disliked, comment, like, videoId } = this.props
  
        const createLike = (liked, disliked) => {
            let like = { likeableId:  comment.id, likeableType: 'Comment', liked: liked, disliked: disliked}
            return like
        }
        if (currentUser) {
            let clicked = e.currentTarget.value
    
            if ((clicked === 'liked' || clicked === 'disliked') && !liked && !disliked) {
                let likedComment = clicked === 'liked' ? createLike(true, false) : createLike(false, true)
                debugger
                this.props.createCommentLike(likedComment)
                .then(() => {
                    this.props.requestComments(videoId)
                    this.props.requestUser(this.props.currentUser.id)
                })
            } else if ((clicked === 'liked' && liked) || (clicked === 'disliked' && disliked)) {
                debugger
                this.props.deleteCommentLike(like.id)
                .then(() => {
                    this.props.requestComments(videoId)
                    this.props.requestUser(this.props.currentUser.id)
                })
            } else {
                debugger
                this.props.deleteCommentLike(like.id)
                .then(() => {
                    debugger
                    let likedComment = (clicked === 'liked') ? createLike(true, false) : createLike(false, true)
                    this.props.createCommentLike(likedComment)
                    .then(() => {
                        this.props.requestComments(videoId)
                        this.props.requestUser(this.props.currentUser.id)
                    })
                })
            }
        } else {
            history.push("/login")
        }
    }

    handleDropdown(e) {
        e.preventDefault();
        this.setState({ commentDropdown: true })
    }

    update(e) {
        return e => {
            this.setState({ body: e.currentTarget.value })
        }
    }

    renderProfileThumbnail() {
        const { comment } = this.props
        if (comment.parentCommentId) {
            return (
                <div className="profile-thumbnail-reply-item">
                    <img src={comment.author.photoUrl} />
                </div>
            )
        } else {
            return (
                <div className="profile-thumbnail-comment-item">
                    <img src={comment.author.photoUrl} />
                </div>
            )
        }
    }

    renderEdit() {
        return (        
            this.state.editing && !this.state.replying ?
            <form onSubmit={this.handleSubmit}>
                <div className="comment-form">
                    {!this.state.clicked ? <input className="comment-form-input" type="text" value={this.state.body} onChange={this.update("body")} />
                    : <input className="comment-form-input-clicked" type="text" value={this.state.body} onChange={this.update("body")} />}
                </div>
                <div className="comment-form-btns1">
                    <button className="cancel-btn" onClick={this.handleCancel}>CANCEL</button>
                    {this.state.body.length > 0 ? <button className="comment-btn-typing" onClick={this.handleComment}>SAVE</button> : <button className="comment-btn" onClick={this.handleComment}>SAVE</button>}
                </div>
            </form> : null
        )
    }

    renderReply() {
        const { comment } = this.props
        return (
            !this.state.editing && this.state.replying ?
            <form onSubmit={this.handleSubmit}>
                <div className="comment-form">
                    <div className="profile-thumbnail-comment">
                        <img src={comment.author.photoUrl} />
                    </div>
                    {!this.state.clicked ? <input className="comment-form-input" type="text" value={this.state.body} onChange={this.update("body")} />
                    : <input className="comment-form-input-clicked" type="text" value={this.state.body} onChange={this.update("body")} />}
                </div>
                <div className="comment-form-btns1">
                    <button className="cancel-btn" onClick={this.handleCancel}>CANCEL</button>
                    {this.state.body.length > 0 ? <button className="comment-btn-typing" onClick={this.handleComment}>REPLY</button> : <button className="comment-btn" onClick={this.handleComment}>REPLY</button>}
                </div>
            </form> : null
        )
    }

    render() {
        const { comment, currentUser } = this.props
        
        return (
            <div className="comment-container">
                {this.renderProfileThumbnail()}
                <div className="comment-info-container">
                    <div className="comment-info" >
                        <div className="comment-info-info-container">
                            <div className="comment-info-info">
                                <div className="comment-author-date">
                                    {comment.author.username} {!this.state.edited ? <span>{comment.createdAt} ago</span> : <span>{comment.updatedAt} ago</span>} {this.state.edited ? <span>(edited)</span> : null}
                                </div>
                                <div className="comment-body" onClick={this.handleEdit}>
                                    {!this.state.editing ? comment.body : null}
                                </div>
                            </div>
                            <div className="comment-dropdown-container">
                                <button className="comment-dropdown" onClick={this.handleDropdown}>
                                    <MdMoreVert />
                                </button>
                            </div>
                            {this.state.commentDropdown ?
                            <div className="comment-dropdown-form">
                                {comment.author.id === currentUser.id ?
                                <div>
                                    <div className="comment-dropdown-delete">
                                        delete
                                    </div>
                                    <div className="comment-dropdown-edit">
                                        edit
                                    </div>
                                </div>
                                : 
                                <div className="comment-dropdown-flag">
                                    
                                </div>}
                            </div>
                            : null}
                        </div>
                        {this.renderEdit()}
                        <div className="comment-icons">
                            {this.props.liked ? 
                                <div className="comment-icons-icons">
                                    <button className="comment-like-btn-liked" onClick={this.handleLike} value="liked">
                                        <IoMdThumbsUp /><span>{comment.likes.like ? comment.likes.like : null}</span>
                                    </button >
                                    <button className="comment-dislike-btn" onClick={this.handleLike} value="disliked">
                                        <IoMdThumbsDown /><span>{comment.likes.dislike ? comment.likes.dislike : null}</span>
                                    </button> 
                                </div> : this.props.disliked ?
                                <div className="comment-icons-icons">
                                    <button className="comment-like-btn" onClick={this.handleLike} value="liked">
                                        <IoMdThumbsUp /><span>{comment.likes.like ? comment.likes.like : null}</span>
                                    </button >
                                    <button className="comment-dislike-btn-liked" onClick={this.handleLike} value="disliked">
                                        <IoMdThumbsDown /><span>{comment.likes.dislike ? comment.likes.dislike : null}</span>
                                    </button> 
                                </div> : 
                                <div className="comment-icons-icons">
                                    <button className="comment-like-btn" onClick={this.handleLike} value="liked">
                                        <IoMdThumbsUp /><span>{comment.likes.like ? comment.likes.like : null}</span>
                                    </button >
                                    <button className="comment-dislike-btn" onClick={this.handleLike} value="disliked">
                                        <IoMdThumbsDown /><span>{comment.likes.dislike ? comment.likes.dislike : null}</span>
                                    </button>
                                </div>}
                            <button className="comment-reply-btn" onClick={this.handleReply}>REPLY</button>
                        </div>
                        {this.renderReply()}
                    </div>
                    {/* <div>
                        <button onClick={this.handleDelete}>delete</button>
                    </div> */}
                </div>
            </div>
        )
    }
 }

 export default CommentIndexItem;