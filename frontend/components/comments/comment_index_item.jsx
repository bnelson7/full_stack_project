import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props) {
        debugger
        super(props)

    }

    render() {
        debugger
        return (
            <div>
                {this.props.comment.body}
            </div>
        )
    }
 }

 export default CommentIndexItem;