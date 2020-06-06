import { connect } from 'react-redux'
import Trending from './trending'
import { requestVideos } from '../../actions/video_actions'

const mstp = (state, ownProps) => {
    debugger
    return {
        videos: Object.values(state.entities.videos),
        path: ownProps.location.pathname
    }
}

const mdtp = dispatch => ({
    requestVideos: () => dispatch(requestVideos())
})

export default connect(mstp, mdtp)(Trending)