import React from "react"
import SigninContainer from "./session/signup_container"
import { HashRouter, Route } from "react-router-dom"

const App = () => (
    <div>
        <h1>welcome to AdTube</h1>
        <SigninContainer />
    </div>
)

export default App