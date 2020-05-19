import React from 'react'
import { MdSort } from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa'

class CommentForm extends React.Component {
    constructor(props) {
        
        super(props)

        this.state = {
            body: "",
            videoId: this.props.match.params.videoId,
            clicked: false
        }

        this.handleComment = this.handleComment.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.totalComments = this.totalComments.bind(this)
    }

    handleComment(e) {
        e.preventDefault();
        const comment = Object.assign({}, this.state)
        this.props.createComment(comment)
        .then(() => {
            this.setState({ 
                body: "",
                clicked: false
            })
        })
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({ clicked: false })
    }

    update(e) {
        return e => {
            this.setState({ 
                body: e.currentTarget.value,
            })
        }
    }

    handleRedirect(e) {
        e.preventDefault();
        const { currentUser, history } = this.props
        if (!currentUser) {
            history.push("/login")
        } else {
            this.setState({ clicked: true })
        }
    }

    totalComments(comments) {
        let sum = 0

        comments.forEach(comment => {
           if (comment.replies) {
                let queue = [comment]
                while (queue.length > 0) {
                    let parent = queue.shift()
                    if (parent.replies) {
                        for (let i = 0; i < parent.replies.length; i++) {
                            queue.push(parent.replies[i])
                        }
                    }
                    sum++
                }
            } else {
                sum++
            }
        });

        return sum;
    }

    render() {
        const { comments } = this.props
        console.log(this.state)
        return (
            <div className="comment-form-container">
                <div className="comment-form-info">
                    <div className="comment-length">
                        {this.totalComments(comments)}&nbsp;Comments
                    </div>
                    <div className="comment-sort">
                        <span><MdSort /></span>SORT BY
                    </div>
                </div>
                <form onSubmit={this.handleComment}>
                    <div className="comment-form">
                        <div className="profile-thumbnail-comment">
                            {this.props.currentUser ? <img src={this.props.currentUser.photoUrl} /> : <img src="https://s.ytimg.com/yts/img/avatar_48-vfllY0UTT.png"/>}
                        </div>
                        {!this.state.clicked ? <input className="comment-form-input" type="text" placeholder="Add a public comment..." value={this.state.body} onChange={this.update("body")} onClick={this.handleRedirect} />
                        : <input className="comment-form-input-clicked" type="text" placeholder="Add a public comment..." value={this.state.body} onChange={this.update("body")} onClick={this.handleRedirect} />}
                    </div>
                    {this.state.clicked ?
                    <div className="comment-form-btns1">    
                        <button className="cancel-btn" onClick={this.handleCancel}>CANCEL</button>
                        {this.state.body.length > 0 ? <button className="comment-btn-typing" onClick={this.handleComment}>COMMENT</button> : <button className="comment-btn" onClick={this.handleComment}>COMMENT</button>}
                    </div> : null}
                </form>
            </div>
        )
    }
}

export default CommentForm;