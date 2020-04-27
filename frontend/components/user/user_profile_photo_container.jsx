import { connect } from 'react-redux'
import ProfilePhoto from './user_profile_photo'
import { updateUser } from '../../actions/user_actions'

const mstp = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mdtp = dispatch => ({
    updateUser: user =>dispatch(updateUser(user))
})

export default connect(mstp, mdtp)(ProfilePhoto)