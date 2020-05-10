export const createVideoLike = like => {
    debugger
    return (
        $.ajax({
            url: `/api/videos/${like.videoId}/likes`,
            method: 'POST',
            data: { like }
        })
    )
}

export const deleteVideoLike = (userId, videoId) => {
    debugger
    return (
        $.ajax({
            url: `/api/users/${userId}/likes/${videoId}`,
            method: 'DELETE'
        })
    )
}

export const createCommentLike = like => {
    
    return (
        $.ajax({
            url: `/api/videos/${like.commentId}/likes`,
            method: 'POST',
            data: { like }
        })
    )
}

export const deleteCommentLike = id => {
    
    return (
        $.ajax({
            url: `/api/likes/${id}`,
            method: 'DELETE'
        })
    )
}