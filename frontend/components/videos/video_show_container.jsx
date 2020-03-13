import { connect } from 'react-redux'
import { requestVideo, requestVideos } from '../../actions/video_actions'
import VideoShow from './video_show'

const mSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    videos: Object.values(state.entities.videos)
})

const mDTP = dispatch => ({
    requestVideo: id => dispatch(requestVideo(id)),
    requestVideos: () => dispatch(requestVideos())
})

export default connect(mSTP, mDTP)(VideoShow)