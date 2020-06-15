import React from 'react'
import { MdHome, MdHistory, MdVideoLibrary, MdSubscriptions, } from "react-icons/md";
import { FaFire, FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ChannelIndexItem from '../channels/channel_index_item';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidUpdate(prevProps) {
    //     
    //     if (this.props.currentUser.subscriptions !== prevProps.currentUser.subscriptions) {
    //         
    //         this.props.requestCurrentUser(this.props.currentUser.id4)
    //     }

    // }

    render() {
        
        return (
            this.props.modal === 'sidebar' ? (
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
                    {!this.props.currentUser ? 
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
                    </div> : 
                    <div className="sidebar-subscriptions-container">
                        <h1 className="sidebar-subscriptions-title">
                            SUBSCRIPTIONS
                        </h1>
                        <ul className="sidebar-subscriptions-grid">
                            {this.props.currentChannel.subscriptions.map(subscription => {
                                return (
                                    <li className="sidebar-subscriptions-grid-item-container" key={subscription.id}>
                                        <ChannelIndexItem 
                                        subscription={subscription} 
                                        modal={this.props.modal} 
                                        path={this.props.path}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>}
                    {this.props.currentUser && <hr id="sidebar-hr" />} 
                </div>
            ) : (
                <div className="sidebar-container">
                    {this.props.path ==="/" ?
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
                    {this.props.path === "/trending" ? 
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
}

export default Sidebar;