import React from 'react'
import { MdHome, MdHistory, MdVideoLibrary, MdSubscriptions, } from "react-icons/md";
import { FaFire, FaGithub, FaLinkedin } from 'react-icons/fa'

const Sidebar = props => {

    return (
        <div className="sidebar-container">
            {props.path ==="/" ?
            <div className="home-icon">
                <MdHome />
                <span>Home</span>
            </div> :
            <div className="sidebar-icon">
                <MdHome />
                <span>Home</span>
            </div>}
            <div className="sidebar-icon">
                <FaFire id="icon-size"/>
                <span>Trending</span>
            </div>
            {/* <div className="sidebar-icon">
                <MdSubscriptions />
                <span>Subscriptions</span>
            </div>
            <div className="sidebar-icon">
                <MdVideoLibrary />
                <span>Library</span>
            </div> */}
            <div className="sidebar-icon">
                <MdHistory />
                <span>History</span>
            </div>
            <a href="https://github.com/bnelson7">
                <div className="sidebar-icon">
                    <FaGithub id="icon-size" />
                    <span>Github</span>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/brad-nelson-919b90a7/">
                <div className="sidebar-icon">
                    <FaLinkedin id="linkedin" />
                    <span>LinkedIn</span>
                </div>
            </a>
        </div>
    )
}

export default Sidebar;