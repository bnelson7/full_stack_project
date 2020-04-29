export const fetchVideos = () => {
debugger    
    return (
        $.ajax({
            url: "/api/videos",
            method: "GET"
        })
    )
}

export const fetchVideo = id => {
    debugger
    return (
        $.ajax({
            url: `/api/videos/${id}`,
            method: "GET"
        })
    )
}

export const createVideo = video => {
    debugger
    return (
        $.ajax({
            url: '/api/videos',
            method: 'POST',
            data: video,
            contentType: false,
            processData: false
        })
    )
}

export const updateVideo = (formData, videoId) => {
    debugger
    return (
        $.ajax({
            url: `/api/videos/${videoId}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        })
    )
}

export const deleteVideo = videoId => {
    debugger
    return (
        $.ajax({
            url: `/api/videos/${videoId}`,
            method: 'DELETE'
        })
    )
}

export const fetchQueriedVideos = queryString => {
    debugger
    return (
        $.ajax({
            url: `/api/videos/results${queryString}`,
            method: 'GET'
        })
    )
}
