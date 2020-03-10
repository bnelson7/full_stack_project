import { connect } from 'react-redux'
import { requestVideos } from '../../actions/video_actions'
import VideoIndex from './video_index'

const mSTP = state => ({
    videos: Object.values(state.entities.videos)
})

const mDTP = dispatch => ({
    requestVideos: videos => dispatch(requestVideos(videos))
})

export default connect(mSTP, mDTP)(VideoIndex)