import { connect } from 'react-redux'
import { requestQueriedVideos } from '../../actions/video_actions'
import Search from './search'

const mstp = state => ({
    videos: Object.values(state.entities.videos)
})

const mdtp = dispatch => ({
    requestQueriedVideos: queryString => dispatch(requestQueriedVideos(queryString))
})

export default connect(mstp, mdtp)(Search)