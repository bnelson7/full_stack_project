import { connect } from 'react-redux'
import { requestVideos, deleteVideo } from '../../actions/video_actions'
import VideoIndex from './video_index'
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {
debugger
    return {
        videos: Object.values(state.entities.videos),
        video: state.entities.videos[ownProps.match.params.videoId],
        path: ownProps.location.pathname
    }
}

const mDTP = dispatch => {
    debugger
    return ({
        requestVideos: videos => dispatch(requestVideos(videos)),
        deleteVideo: videoId => dispatch(deleteVideo(videoId))
    })
}

export default withRouter(connect(mSTP, mDTP)(VideoIndex))