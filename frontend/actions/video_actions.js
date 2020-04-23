import * as VideoAPIUtil from '../util/video_api_util'

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS'
export const CLEAR_VIDEO_ERRORS = 'CLEAR_VIDEO_ERRORS'

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos 
})

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video 
})

export const clearVideoErrors = () => ({
    type: CLEAR_VIDEO_ERRORS
})

export const requestVideos = () => dispatch => (
    VideoAPIUtil.fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)))
)

export const requestVideo = id => dispatch => {
    
    return (
        VideoAPIUtil.fetchVideo(id)
        .then(video => dispatch(receiveVideo(video)))
    )
}