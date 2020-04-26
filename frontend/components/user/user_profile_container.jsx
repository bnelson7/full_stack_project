import { connect } from 'react-redux'
import UserProfile from './user_profile'

const mSTP = state => ({

})

const mDTP = dispatch => ({
    createVideo: video => dispatch(createVideo(video))
})

export default connect(mSTP, mDTP)(UserProfile)