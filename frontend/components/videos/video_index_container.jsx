import { connect } from 'react-redux'
import { requestVideos, deleteVideo } from '../../actions/video_actions'
import VideoIndex from './video_index'

const mSTP = (state, ownProps) => ({
    videos: Object.values(state.entities.videos),
    path: ownProps.location.pathname
})

const mDTP = dispatch => {
    debugger
    return ({
        requestVideos: videos => dispatch(requestVideos(videos)),
        deleteVideo: videoId => dispatch(deleteVideo(videoId))
    })
}

export default connect(mSTP, mDTP)(VideoIndex)