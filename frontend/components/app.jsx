import React from "react"
import { Route, Switch } from "react-router-dom"
import VideoIndexContainer from './videos/video_index_container'
import VideoShowContainer from './videos/video_show_container'
import Sidebar from "./sidebar/sidebar"

const App = () => (
    <div>
        {/* <Route path="/search?" component={SearchContainer} /> */}
        <Route path="/search" component={Sidebar} />
        <Route exact path="/videos/:videoId" component={VideoShowContainer} />
        <div className="main-container">
            <Route exact path="/" component={Sidebar} />
            <Route exact path="/" component={VideoIndexContainer}/>
        </div>
    </div>
)

export default App