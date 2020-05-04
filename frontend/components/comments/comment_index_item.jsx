import React from 'react'
import CommentFormContainer from './comment_form_container'

class CommentIndexItem extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
            body: this.props.comment.body,
            id: this.props.comment.id,
            videoId: this.props.videoId,
            edited: this.props.comment.edited,
            editing: false,
            replying: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleReply = this.handleReply.bind(this)
    }

    handleSubmit() {
        if (!this.state.replying) {
            const editedComment = Object.assign({}, this.state)
            debugger
            this.props.editComment(editedComment)
            .then(() => {
                this.setState({
                    edited: this.props.comment.edited, 
                    editing: false 
                })
            })
        } else {
            const reply = Object.assign({}, this.state)
            debugger
            this.props.createComment(reply).then(() => {
                this.setState({
                  editing: false
                })
            })
        }
    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id)
    }

    handleEdit(e) {
        this.setState({ editing: true })
    }

    handleCancel(e) {
        this.setState({ editing: false})
    }

    handleReply() {
        this.setState({ 
            body: "",
            editing: true,
            replying: true
        })
    }

    update(e) {
        return e => {
            this.setState({ body: e.currentTarget.value })
        }
    }

    render() {
        debugger
        const { comment } = this.props
        console.log(this.state)
        return (
            <div>
                <div>
                    <div onClick={this.handleEdit}>
                        <div className="profile-thumbnail-comment">
                            <img src={comment.author.photoUrl} />
                        </div>
                        {comment.author.username} {!this.state.edited ? <span>{comment.created_at}</span> : <span>{comment.updated_at}</span>} {this.state.edited ? <span>(edited)</span> : null}
                        <div>
                            {comment.body}
                        </div>
                        <div>
                            <button onClick={this.handleReply}>REPLY</button>
                        </div>
                    </div>
                    {this.state.editing ?
                    <form onSubmit={this.handleSubmit}>
                        <div className="comment-form">
                            <div className="profile-thumbnail-comment">
                                <img src={comment.author.photoUrl} />
                            </div>
                            <input type="text" value={this.state.body} onChange={this.update("body")}/>
                        </div>
                        <div className="comment-form-btns1">
                            <button className="cancel-btn" onClick={this.handleCancel}>CANCEL</button>
                            <button className="comment-btn" onClick={this.handleSubmit}>{(this.state.editing && this.state.replying) ? "REPLY" : "SAVE"}</button>
                        </div>
                    </form> : null}
                    <div>
                        <button onClick={this.handleDelete}>delete</button>
                    </div>
                </div>
            </div>
        )
    }
 }

 export default CommentIndexItem;