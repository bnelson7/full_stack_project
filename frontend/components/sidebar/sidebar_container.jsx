import { connect } from 'react-redux'
import Sidebar from './sidebar'

const mstp = (state, ownProps) => ({
    path: ownProps.location.name
})

export default connect(mstp, null)(Sidebar)