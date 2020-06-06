import React from 'react'
import { MdHome, MdHistory, MdVideoLibrary, MdSubscriptions, } from "react-icons/md";
import { FaFire, FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    
    return (
        props.modal === 'sidebar' ? (
            <div className="sidebar-container-expanded">
                <ul className="sidebar-items-expanded">
                    <li className="home-item-expanded">
                        <div className="home-icon-expanded">
                            <MdHome />
                        </div> 
                        <div className="home-text-expanded">
                            Home
                        </div>
                    </li> 
                    <li>
                        <div className="sidebar-icon-expanded">
                            <FaFire id="icon-size"/>
                        </div>
                        <div className="sidebar-text-expanded">
                            Trending
                        </div>
                    </li>
                    <li>
                        <div className="sidebar-icon-expanded">
                            <MdHistory />
                        </div>
                        <div className="sidebar-text-expanded">
                            History
                        </div>
                    </li>
                </ul>
                <hr id="sidebar-hr"/>
                <ul className="sidebar-items-expanded">
                    <li>
                        {/* <a href="https://github.com/bnelson7"> */}
                            <div className="sidebar-icon-expanded">
                                <FaGithub id="icon-size" />
                            </div>
                            <div className="sidebar-text-expanded">
                                Github
                            </div>
                        {/* </a> */}
                    </li>
                    <li>
                        {/* <a href="https://www.linkedin.com/in/brad-nelson-919b90a7/"> */}
                            <div className="sidebar-icon-expanded">
                                <FaLinkedin id="linkedin" />
                            </div>
                            <div className="sidebar-text-expanded">
                                LinkedIn
                            </div>
                        {/* </a> */}
                    </li>
                </ul>
                <hr id="sidebar-hr" />
                {!props.currentUser ? 
                <div>
                    <div className="sidebar-signin">
                        <p>
                            Sign in to like videos, 
                            comment, and subscribe.
                        </p>
                        <Link className="signin-button" to="/login">
                            <span className="profile-icon">
                                <FaUserCircle />
                            </span>
                            SIGN IN
                        </Link>
                    </div> 
                    <hr id="sidebar-hr" /> 
                </div> : null}
            </div>
        ) : (
            <div className="sidebar-container">
                {props.path ==="/" ?
                    <div className="home-icon">
                        <MdHome />
                        <span>Home</span>
                    </div> :
                    <Link to="/">
                        <div className="sidebar-icon">
                            <MdHome />
                            <span>Home</span>
                        </div>
                    </Link>}
                {props.path === "/trending" ? 
                    <div className="sidebar-icon" id="sidebar-trending">
                        <FaFire id="icon-size"/>
                        <span>Trending</span>
                    </div>: 
                    <Link to="/trending">
                        <div className="sidebar-icon" >
                            <FaFire id="icon-size"/>
                            <span>Trending</span>
                        </div>
                    </Link>}
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
    )
}

export default Sidebar;