import React from 'react'

class CommentForm extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
            body: "",
            videoId: this.props.match.params.videoId
        }

        this.handleComment = this.handleComment.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
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

    update(e) {
        return e => {
            this.setState({ body: e.currentTarget.value })
        }
    }

    handleRedirect(e) {
        e.preventDefault();
        const { currentUser, history } = this.props
        if (!currentUser) {
            history.push("/login")
        }
    }

    render() {
        debugger
        console.log(this.state)
        return (
            <div className="comment-form-container">
                <form onSubmit={this.handleComment}>
                    <input type="text" placeholder="Add a public comment..." value={this.state.body} onChange={this.update("body")} onClick={this.handleRedirect}/>
                    <button>create comment</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;