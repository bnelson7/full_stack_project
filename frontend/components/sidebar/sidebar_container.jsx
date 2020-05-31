import { connect } from 'react-redux'
import Sidebar from './sidebar'

const mstp = (state, ownProps) => {
    debugger
    return {
        path: ownProps.location.pathname,
        modal: state.ui.type,
        currentUser: state.entities.users[state.session.id]
    }
}

export default connect(mstp, null)(Sidebar)