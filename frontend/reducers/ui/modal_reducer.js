import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions'

const modalReducer = (prevState = {}, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            debugger
            return action.modal;
        case CLOSE_MODAL:
            debugger
            return {};
        default:
            return prevState;
    }
}

export default modalReducer;