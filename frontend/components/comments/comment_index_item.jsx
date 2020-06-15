import React from 'react'
import CommentFormContainer from './comment_form_container'
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io'
import CommentDropdown from '../hooks/comment_dropdown'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

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
            clicked: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleReply = this.handleReply.bind(this)
        this.handleLike = this.handleLike.bind(this)
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
            .then(comment => {
                this.props.requestComments(comment.comment.videoId)
            })
            .then(() => {
                this.setState({
                    editing: false,
                    replying: false
                })
            })
        }
    }

    handleDelete(e) {
        e.preventDefault();
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
        const { currentUser, history, liked, disliked, comment, like, videoId, currentChannel } = this.props
  
        const createLike = (liked, disliked) => {
            let like = { likeableId:  comment.id, likeableType: 'Comment', liked: liked, disliked: disliked}
            return like
        }
        if (currentUser) {
            let clicked = e.currentTarget.value
    
            if ((clicked === 'liked' || clicked === 'disliked') && !liked && !disliked) {
                let likedComment = clicked === 'liked' ? createLike(true, false) : createLike(false, true)
                
                this.props.createCommentLike(likedComment)
                .then(() => {
                    this.props.requestComments(videoId)
                    this.props.requestCurrentChannel(this.props.currentChannel.id)
                })
            } else if ((clicked === 'liked' && liked) || (clicked === 'disliked' && disliked)) {
                
                this.props.deleteCommentLike(like.id)
                .then(() => {
                    this.props.requestComments(videoId)
                    this.props.requestCurrentChannel(this.props.currentChannel.id)
                })
            } else {
                
                this.props.deleteCommentLike(like.id)
                .then(() => {
                    
                    let likedComment = (clicked === 'liked') ? createLike(true, false) : createLike(false, true)
                    this.props.createCommentLike(likedComment)
                    .then(() => {
                        this.props.requestComments(videoId)
                        this.props.requestCurrentChannel(this.props.currentChannel.id)
                    })
                })
            }
        } else {
            history.push("/login")
        }
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
                    <Link to={`/channels/${comment.author.id}`}>
                        <img src={comment.author.logoUrl} />
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="profile-thumbnail-comment-item">
                    <Link to={`/channels/${comment.author.id}`}>
                        <img src={comment.author.logoUrl} />
                    </Link>
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
        const { comment, currentUser, currentChannel } = this.props
        return (
            !this.state.editing && this.state.replying ?
            <form onSubmit={this.handleSubmit}>
                <div className="comment-form-reply">
                    <div className="profile-thumbnail-comment-reply">
                        <img src={currentChannel.logoUrl} />
                    </div>
                    {!this.state.clicked ? 
                    <input className="comment-form-input" type="text" value={this.state.body} onChange={this.update("body")} />
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
        const { comment, currentUser, currentChannel } = this.props
        
        return (
            <div className="comment-container">
                {this.renderProfileThumbnail()}
                <div className="comment-info-container">
                    <div className="comment-info" >
                        <div className="comment-info-info-container">
                            <div className="comment-info-info">
                                <div className="comment-author-date">
                                    <strong>{comment.author.name}</strong>&nbsp; 
                                    {!this.state.edited ? 
                                    <span>
                                        <Moment fromNow>
                                            {comment.createdAt}
                                        </Moment>
                                    </span> : 
                                    <span>
                                        <Moment fromNow>
                                            {comment.updatedAt}
                                        </Moment>
                                    </span>}&nbsp; 
                                    {this.state.edited ? <span>(edited)</span> : null}
                                </div>
                                <div className="comment-body">
                                    {!this.state.editing ? comment.body : null}
                                </div>
                            </div>
                            <CommentDropdown
                            comment={comment} 
                            currentChannel={currentChannel} 
                            handleDelete={this.handleDelete} 
                            handleEdit={this.handleEdit} 
                            editing={this.state.editing}
                            />
                        </div>
                        {this.renderEdit()}
                        <div className="comment-icons">
                            {this.props.liked ? 
                                <div className="comment-icons-icons">
                                    <button className="comment-like-btn-liked" onClick={this.handleLike} value="liked">
                                        <IoMdThumbsUp />
                                        <span>
                                            {comment.likes.like ? comment.likes.like : null}
                                        </span>
                                    </button >
                                    <button className="comment-dislike-btn" onClick={this.handleLike} value="disliked">
                                        <IoMdThumbsDown />
                                        <span>
                                            {comment.likes.dislike ? comment.likes.dislike : null}
                                        </span>
                                    </button> 
                                </div> : this.props.disliked ?
                                <div className="comment-icons-icons">
                                    <button className="comment-like-btn" onClick={this.handleLike} value="liked">
                                        <IoMdThumbsUp />
                                        <span>
                                            {comment.likes.like ? comment.likes.like : null}
                                        </span>
                                    </button >
                                    <button className="comment-dislike-btn-liked" onClick={this.handleLike} value="disliked">
                                        <IoMdThumbsDown />
                                        <span>
                                            {comment.likes.dislike ? comment.likes.dislike : null}
                                        </span>
                                    </button> 
                                </div> : 
                                <div className="comment-icons-icons">
                                    <button className="comment-like-btn" onClick={this.handleLike} value="liked">
                                        <IoMdThumbsUp />
                                        <span>
                                            {comment.likes.like ? comment.likes.like : null}
                                        </span>
                                    </button >
                                    <button className="comment-dislike-btn" onClick={this.handleLike} value="disliked">
                                        <IoMdThumbsDown />
                                        <span>
                                            {comment.likes.dislike ? comment.likes.dislike : null}
                                        </span>
                                    </button>
                                </div>}
                            <button className="comment-reply-btn" onClick={this.handleReply}>REPLY</button>
                        </div>
                        {this.renderReply()}
                    </div>
                </div>
            </div>
        )
    }
 }

 export default CommentIndexItem;