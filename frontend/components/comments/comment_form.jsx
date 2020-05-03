import React from 'react'
import { MdSort } from "react-icons/md";

class CommentForm extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
            body: "",
            videoId: this.props.match.params.videoId,
            typing: false
        }

        this.handleComment = this.handleComment.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleComment(e) {
        e.preventDefault();
        const comment = Object.assign({}, this.state)
        debugger
        this.props.createComment(comment)
        .then(() => {
            this.setState({ body: "" })
        })
    }

    handleCancel(e) {
        this.setState({ typing: false })
        e.stopPropagation();
    }

    update(e) {
        return e => {
            this.setState({ 
                body: e.currentTarget.value
            })
        }
    }

    handleRedirect(e) {
        e.preventDefault();
        const { currentUser, history } = this.props
        if (!currentUser) {
            history.push("/login")
        } else {
            this.setState({ typing: true })
        }
    }

    render() {
        debugger
        console.log(this.state)
        return (
            <div className="comment-form-container" >
                <div className="comment-form-info">
                    {this.props.comments.length}&nbsp;Comments<span><MdSort />SORT BY</span>
                </div>
                <form onSubmit={this.handleComment}>
                    <div className="comment-form">
                        <div className="profile-thumbnail-comment">
                            <img src={this.props.currentUser.photoUrl} />
                        </div>
                        <input type="text" placeholder="Add a public comment..." value={this.state.body} onChange={this.update("body")} onClick={this.handleRedirect} />
                    </div>
                    {this.state.typing ?
                    <div className="comment-form-btns1">    
                        <button className="cancel-btn" onClick={this.handleCancel}>CANCEL</button>
                        <button className="comment-btn" onClick={this.handleComment}>COMMENT</button>
                    </div> : null}
                </form>
            </div>
        )
    }
}

export default CommentForm;