import { connect } from 'react-redux'
import Sidebar from './sidebar'

const mstp = (state, ownProps) => {
    return {
        path: ownProps.location.pathname
    }
}

export default connect(mstp, null)(Sidebar)