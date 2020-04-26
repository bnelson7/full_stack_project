import React from "react"
import { Route, Switch } from "react-router-dom"
import VideoIndexContainer from './videos/video_index_container'
import VideoShowContainer from './videos/video_show_container'
import Sidebar from "./sidebar/sidebar"
import UserProfileContainer from './user/user_profile_container'
import SearchContainer from './search/search_container'

const App = () => (
    <div>
        <Route exact path="/videos/:videoId" component={VideoShowContainer} />
        <div className="main-container">
            <Route path="/search" component={Sidebar} />
            <Route path="/search" component={SearchContainer} />
            <Route exact path="/user" component={Sidebar} />
            <Route exact path="/user" component={UserProfileContainer} />
            <Route exact path="/" component={Sidebar} />
            <Route exact path="/" component={VideoIndexContainer}/>
        </div>
    </div>
)

export default App