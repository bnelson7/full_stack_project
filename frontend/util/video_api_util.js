export const fetchVideos = () => (
    $.ajax({
        url: "/api/videos",
        method: "GET"
    })
)

export const fetchVideo = id => {
    
    return (
        $.ajax({
            url: `/api/videos/${id}`,
            method: "GET"
        })
    )
}

