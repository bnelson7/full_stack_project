import React from 'react'
import { MdHome, MdHistory, MdVideoLibrary, MdSubscriptions, } from "react-icons/md";
import { FaFire, FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ChannelIndexItem from '../channels/channel_index_item';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        
        // this.selected = this.selected.bind(this)
    }

    // selected() {

    // }

    render() {

        return (
            this.props.modal === 'sidebar' ? (
                <div className="sidebar-container-expanded">
                    <ul className="sidebar-items-expanded">
                        {this.props.path === "/" ? 
                        <li className="home-item-expanded">
                            <div className="home-icon-expanded">
                                <MdHome />
                            </div> 
                            <div className="home-text-expanded">
                                Home
                            </div>
                        </li> :
                        <Link to='/'>
                            <li>
                                <div className="sidebar-icon-expanded">
                                    <MdHome />
                                </div> 
                                <div className="sidebar-text-expanded">
                                    Home
                                </div>
                            </li>
                        </Link>}
                        {this.props.path === "/trending" ?
                        <li className="home-item-expanded">
                            <div className="home-icon-expanded">
                                <FaFire id="icon-size" />
                            </div>
                            <div className="home-text-expanded">
                                Trending
                                </div>
                        </li> :
                        <Link to="/trending">
                            <li>
                                <div className="sidebar-icon-expanded">
                                    <FaFire id="icon-size"/>
                                </div>
                                <div className="sidebar-text-expanded">
                                    Trending
                                </div>
                            </li>
                        </Link>}
                        {/* <li>
                            <div className="sidebar-icon-expanded">
                                <MdHistory />
                            </div>
                            <div className="sidebar-text-expanded">
                                History
                            </div>
                        </li> */}
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
                    {!this.props.currentChannel ? 
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
                            {this.props.currentChannel.hasOwnProperty('subscriptions') && this.props.currentChannel.subscriptions.map(subscription => {
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
                    {this.props.currentChannel && <hr id="sidebar-hr" />} 
                </div>
            ) : (
                <div className="sidebar-container">
                    {this.props.path ==="/" ?
                        <Link to="/">
                            <div className="home-icon">
                                <MdHome />
                                <span>Home</span>
                            </div> 
                        </Link> :
                        <Link to="/">
                            <div className="sidebar-icon">
                                <MdHome />
                                <span>Home</span>
                            </div>
                        </Link>}
                    {this.props.path === "/trending" ? 
                        <Link to="/trending">
                            <div className="sidebar-icon" id="sidebar-trending">
                                <FaFire id="icon-size"/>
                                <span>Trending</span>
                            </div> 
                        </Link> :
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
                    {/* <div className="sidebar-icon">
                        <MdHistory />
                        <span>History</span>
                    </div> */}
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