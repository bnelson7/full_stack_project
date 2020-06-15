import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import { createVideo, updateVideo } from '../../actions/video_actions'
import Modal from './modal'
import {withRouter} from 'react-router-dom'

const mstp = (state, ownProps) => {
    return {
        modal: state.ui,
        video: state.ui.video,
        currentUser: state.entities.users[state.session.id],
        currentChannel: state.entities.channels[state.session.channelId],
        path: ownProps.location.pathname
    }
}

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createVideo: video => dispatch(createVideo(video)),
        updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    }
}

export default withRouter(connect(mstp, mdtp)(Modal))
