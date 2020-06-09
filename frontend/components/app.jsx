import React from "react"
import { Route, Switch } from "react-router-dom"
import VideoIndexContainer from './videos/video_index_container'
import VideoShowContainer from './videos/video_show_container'
import Sidebar from "./sidebar/sidebar_container"
import UserProfileContainer from './user/user_profile_container'
import SearchContainer from './search/search_container'
import { ProtectedRoute } from '../util/route_util'
import Modal from "./modal/modal_container"
import TrendingContainer from './trending/trending_container'
import ChannelContainer from './channels/channel_container'

const App = () => (
    <div className="root-container">
        <Modal />
        <Route exact path="/videos/:videoId" component={VideoShowContainer} />
        <div className="main-container">
            <Route path="/trending" component={Sidebar} />
            <Route path="/trending" component={TrendingContainer} />
            <Route path="/results" component={Sidebar} />
            <Route path="/results" component={SearchContainer} />
            <ProtectedRoute exact path="/users/:userId" component={Sidebar} />
            <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
            <Route exact path="/channels/:channelId" component={Sidebar} />
            <Route exact path="/channels/:channelId" component={ChannelContainer} />
            <Route exact path="/" component={Sidebar} />
            <Route exact path="/" component={VideoIndexContainer}/>
        </div>
    </div>
)

export default App