import React from "react"
import ReactDOM from "react-dom"
import { createUser, createSession, destroySession } from './util/session_api_util'
// import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {

    window.createUser = createUser
    window.createSession = createSession
    window.destroySession = destroySession

    const root = document.getElementById("root")
    // const store = configureStore()
    ReactDOM.render(<h1>Welcome to AdTube</h1>, root)
})