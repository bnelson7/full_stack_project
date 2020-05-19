import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import { createVideo, updateVideo } from '../../actions/video_actions'
import Modal from './modal'

const mstp = state => {
    
    return {
        modal: state.ui
    }
}

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createVideo: video => dispatch(createVideo(video)),
        updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    }
}

export default connect(mstp, mdtp)(Modal)
