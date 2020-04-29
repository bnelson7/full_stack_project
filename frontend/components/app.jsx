import React from "react"
import { Route, Switch } from "react-router-dom"
import VideoIndexContainer from './videos/video_index_container'
import VideoShowContainer from './videos/video_show_container'
import Sidebar from "./sidebar/sidebar"
import UserProfileContainer from './user/user_profile_container'
import SearchContainer from './search/search_container'
import { ProtectedRoute } from '../util/route_util'

const App = () => (
    <div>
        <Route exact path="/videos/:videoId" component={VideoShowContainer} />
        <div className="main-container">
            <Route path="/results" component={Sidebar} />
            <Route path="/results" component={SearchContainer} />
            <ProtectedRoute exact path="/users/:userId" component={Sidebar} />
            <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
            <Route exact path="/" component={Sidebar} />
            <Route exact path="/" component={VideoIndexContainer}/>
        </div>
    </div>
)

export default App