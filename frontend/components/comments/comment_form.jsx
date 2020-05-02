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
    }

    handleComment(e) {
        e.preventDefault();
        const comment = Object.assign({}, this.state)
        debugger
        this.props.createComment(comment)
    }

    update(e) {
        return e => {
            this.setState({ body: e.currentTarget.value })
        }
    }

    render() {
        debugger
        console.log(this.state)
        return (
            <div className="comment-form-container">
                <form onSubmit={this.handleComment}>
                    <input type="text" placeholder="Add a public comment..." value={this.state.body} onChange={this.update("body")}/>
                    <button>create comment</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;