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

export const deleteVideoLike = id => {
    debugger
    return (
        $.ajax({
            url: `/api/likes/${id}`,
            method: 'DELETE'
        })
    )
}

export const createCommentLike = like => {
    debugger
    return (
        $.ajax({
            url: `/api/videos/${like.commentId}/likes`,
            method: 'POST',
            data: { like }
        })
    )
}

export const deleteCommentLike = id => {
    debugger
    return (
        $.ajax({
            url: `/api/likes/${id}`,
            method: 'DELETE'
        })
    )
}