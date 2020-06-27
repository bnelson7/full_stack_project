import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaUserFriends } from "react-icons/fa";
import { BsBoxArrowRight, BsSun } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { MdAccountBox, MdPersonAdd, MdCheck } from 'react-icons/md'
import { FiArrowLeft } from 'react-icons/fi'

const NavBarDropdown = (props) => {
    const navbar = useRef();

    const [open, setOpen] = useState();

    const handleClick = e => {
        if (navbar.current.contains(e.target)) {
            return;
        }
  
      setOpen(false);
      props.handleDefault()
    };
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    debugger
    return (
        <div className="user-icon" ref={navbar}>
            <button className="profile-photo-nav" onClick={e => setOpen(!open)}>
                {props.currentChannel.logoUrl ? <img src={props.currentChannel.logoUrl} /> : <img src={window.user} />}
            </button>
            {open && props.switchAccount &&
            <ul className="profile-nav-dropdown">
                <div className="nav-dropdown-user-accounts">
                    <span onClick={props.handleDefault}><FiArrowLeft /></span>
                    <span>Accounts</span>
                </div>
                <div className="nav-dropdown-user-channels-container">
                    <div className="user-channels-email">
                        <span>{props.currentUser.email}</span>
                    </div>
                    <ul className="user-channels-nav-dropdown">
                        {props.currentUser.channels.map(channel => {
                            debugger
                            return (
                                <li key={channel.id} onClick={() => props.handleSwitchChannel(channel.id)}>
                                    <div className="channel-logo-nav-dropdown">
                                        <img src={channel.logoUrl} />
                                    </div>
                                    <div className="user-channel-dropdown-name-container">         
                                        <div className="user-channel-dropdown-name">
                                            <span>{channel.name}</span>
                                            <span>{!channel.subscribers.length ? "No subscribers" : 
                                            channel.subscribers.length === 1 ? "1 subscriber" :
                                            `${channel.subscribers.length} subscribers`}</span>
                                        </div>
                                        {channel.id === props.currentChannel.id &&
                                        <div className="checkmark">
                                            <MdCheck />
                                        </div>}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="nav-dropdown-info">
                    <Link to="/create_channel">
                        <li id="account">
                            <span><MdPersonAdd className="nav-dropdown-info-channel-account" /></span>
                            <span>Add Account</span>
                        </li>
                    </Link>
                        <li id="signout" onClick={props.handleLogout}>
                            <span><BsBoxArrowRight className="nav-dropdown-info-item" /></span>
                            <span>Sign out</span>
                        </li>
                    {/* <li><BsSun className="nav-dropdown-info-channel-item"/><span>Dark theme: Off</span></li> */}
                </div>
            </ul>}
            {open && !props.switchAccount &&
            <ul className="profile-nav-dropdown">
                <div className="nav-dropdown-user">
                    <li className="profile-thumbnail-dropdown">
                        <img src={window.user} />
                    </li>
                    <li className="profile-dropdown-info">
                        <div className="profile-dropdown-info-user">
                            <span>{props.currentUser.username}</span>
                            <span>{props.currentUser.email}</span>
                        </div>
                        <Link to={`/channels/${props.currentChannel.id}`}>
                            <p>Manage your Google Account</p>
                        </Link>
                    </li>
                </div>
                <div className="nav-dropdown-info">
                    <Link to={`/channels/${props.currentChannel.id}`}>
                        <li>
                            <span><MdAccountBox className="nav-dropdown-info-channel-account" /></span>
                            <span>Your channel</span>
                        </li>
                    </Link>
                        <li onClick={props.handleAccount}>
                            <span><FaUserFriends className="nav-dropdown-info-channel" /></span>
                            <span id="switch-account">Switch account</span>
                            <IoIosArrowForward />
                        </li>
                        <li id="signout" onClick={props.handleLogout}>
                            <span><BsBoxArrowRight className="nav-dropdown-info-item" /></span>
                            <span>Sign out</span>
                        </li>
                    {/* <li><BsSun className="nav-dropdown-info-channel-item"/><span>Dark theme: Off</span></li> */}
                </div>
            </ul>}
        </div>
    );
}

export default NavBarDropdown;