import React from "react"
import { Provider } from "react-redux"
import { HashRouter, Route, Switch } from "react-router-dom"
import { AuthRoute } from '../util/route_util'
import NavBarContainer from "./navbar/navbar_container"
import LoginContainer from './session/login_container'
import SignupContainer from "./session/signup_container"
import App from "./app"

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <AuthRoute path="/login" component={LoginContainer} />
                <AuthRoute path="/signup" component={SignupContainer} />
                <Route path="/" component={NavBarContainer} />
            </Switch>
            <App />
        </HashRouter>
    </Provider>
)

export default Root