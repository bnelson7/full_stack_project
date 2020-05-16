import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import Modal from './modal'

const mstp = state => {
    debugger
    return {
        modal: state.ui
    }
}

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mstp, mdtp)(Modal)
