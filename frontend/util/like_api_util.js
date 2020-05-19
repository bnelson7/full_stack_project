export const createVideoLike = like => {
    
    return (
        $.ajax({
            url: `/api/videos/${like.likeableId}/likes`,
            method: 'POST',
            data: { like }
        })
    )
}

export const deleteVideoLike = id => {
    
    return (
        $.ajax({
            url: `/api/likes/${id}`,
            method: 'DELETE'
        })
    )
}

export const createCommentLike = like => {
    
    return (
        $.ajax({
            url: `/api/comments/${like.likeableId}/likes`,
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