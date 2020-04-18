import React from "react"
import SignupContainer from "./session/signup_container"
import { HashRouter, Route, Link, Switch } from "react-router-dom"
import NavBarContainer from "./navbar/navbar_container"
import LoginContainer from './session/login_container'
import VideoIndexContainer from './videos/video_index_container'
import VideoShowContainer from './videos/video_show_container'
import { AuthRoute } from '../util/route_util'

const App = () => (
    <div>
        <Route exact path="/" component={NavBarContainer} />
    {/* <Switch> */}
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <Route exact path="/videos/:videoId" component={VideoShowContainer} />
        <Route exact path="/videos/:videoId" component={NavBarContainer} />
        {/* <Route exact path="/" component={VideoIndexContainer}/> */}
    {/* </Switch> */}
    </div>
)

export default App