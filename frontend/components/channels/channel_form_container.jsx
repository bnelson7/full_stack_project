import { connect } from 'react-redux'
import ChannelForm from './channel_form'
import { withRouter } from 'react-router-dom'
import { createChannel } from '../../actions/channel_actions'

const mstp = state => {
    
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdtp = dispatch => ({
    createChannel: channel => dispatch(createChannel(channel))
})

export default withRouter(connect(mstp, mdtp)(ChannelForm));