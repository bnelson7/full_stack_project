import { connect } from 'react-redux'
import { requestVideos } from '../../actions/video_actions'
import VideoIndex from './video_index'

const mSTP = (state, ownProps) => ({
    videos: Object.values(state.entities.videos),
    path: ownProps.location.pathname
})

const mDTP = dispatch => ({
    requestVideos: videos => dispatch(requestVideos(videos))
})

export default connect(mSTP, mDTP)(VideoIndex)