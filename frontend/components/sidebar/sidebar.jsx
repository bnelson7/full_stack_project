import React from 'react'
import { MdHome, MdHistory, MdVideoLibrary, MdSubscriptions, } from "react-icons/md";
import { FaFire, FaGithub, FaLinkedin } from 'react-icons/fa'

class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar-container">
                <div className="home-icon">
                    <MdHome />
                    <span>Home</span>
                </div>
                <div className="sidebar-icon">
                    <FaFire />
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
                    < MdHistory />
                    <span>History</span>
                </div>
                <div className="sidebar-icon">
                    < FaGithub />
                    <span>Github</span>
                </div>
                <div className="sidebar-icon">
                    < FaLinkedin />
                    <span>Linkedin</span>
                </div>
            </div>
        )
    }
}

export default Sidebar;