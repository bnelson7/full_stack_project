import { connect } from 'react-redux'
import { requestQueriedVideos } from '../../actions/video_actions'
import Search from './search'

const mstp = state => ({
    
})

const mdtp = dispatch => ({
    requestQueriedVideos: queryString => dispatch(requestQueriedVideos(queryString))
})

export default connect(null, mdtp)(Search)