import * as VideoAPIUtil from '../util/video_api_util'

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'
export const REMOVE_VIDEO = 'REMOVE_VIDEO'
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS'
export const CLEAR_VIDEO_ERRORS = 'CLEAR_VIDEO_ERRORS'

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos 
})

const receiveVideo = payload => {
    debugger
    return {
        type: RECEIVE_VIDEO,
        payload 
    }
}

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
})

export const clearVideoErrors = () => ({
    type: CLEAR_VIDEO_ERRORS
})

export const requestVideos = () => dispatch => {
    debugger
    return (
        VideoAPIUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
    )
}

export const requestVideo = id => dispatch => {
    debugger
    return (
        VideoAPIUtil.fetchVideo(id)
        .then(video => dispatch(receiveVideo(video)))
    )
}

export const createVideo = video => dispatch => {
    debugger
    return (
        VideoAPIUtil.createVideo(video)
        .then(video => dispatch(receiveVideo(video)))
    )
}

export const updateVideo = (formData, videoId) => dispatch => {
    debugger
    return (
        VideoAPIUtil.updateVideo(formData, videoId)
        .then(video => dispatch(receiveVideo(video)))
    )
}

export const deleteVideo = videoId => dispatch => {
    debugger
    return (
        VideoAPIUtil.deleteVideo(videoId)
        .then(() => dispatch(removeVideo(videoId)))
    )
}

export const requestQueriedVideos = queryString => dispatch => {
    debugger
    return (
        VideoAPIUtil.fetchQueriedVideos(queryString)
        .then(videos => dispatch(receiveVideos(videos)))
    )
}