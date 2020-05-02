import { connect } from 'react-redux'
import { requestQueriedVideos } from '../../actions/video_actions'
import Search from './search'

const mstp = (state, ownProps) => ({
    path: ownProps.location.pathname
})

const mdtp = dispatch => ({
    requestQueriedVideos: queryString => dispatch(requestQueriedVideos(queryString))
})

export default connect(mstp, mdtp)(Search)