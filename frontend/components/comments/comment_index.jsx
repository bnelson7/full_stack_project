import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
    constructor(props) {
        debugger
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.requestComments()
    }

    render() {
        const { comments } = this.props
        debugger
        return (
            <div className="comment-index-container">
                comment index
                {comments.map(comment => {
                 return (
                     <li className="grid-item">
                         <CommentIndexItem key={comment.id} comment={comment} />
                     </li>
                 )   
                })}
            </div>
        )
    }
}

export default CommentIndex;