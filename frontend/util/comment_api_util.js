export const fetchComments = (videoId) => {
    
    return (
        $.ajax({
            url: `/api/videos/${videoId}/comments`,
            method: 'GET'
        })
    )
}

export const fetchComment = (id) => {
    return (
        $.ajax({
            url: `/api/comments/${id}`,
            method: 'GET'
        })
    )
}

export const createComment = comment => {
    
    return (
        $.ajax({
            url: `/api/videos/${comment.videoId}/comments`,
            method: 'POST',
            data: { comment } 
        })
    )
}

export const updateComment = (comment) => {
    
    return (
        $.ajax({
            url: `/api/comments/${comment.id}`,
            method: 'PATCH',
            data: { comment }
        })
    )
}

export const deleteComment = (id) => {
    
    return (
        $.ajax({
            url: `/api/comments/${id}`,
            method: 'DELETE'
        })
    )
}
