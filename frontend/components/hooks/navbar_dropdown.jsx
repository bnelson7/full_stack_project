import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { BsBoxArrowRight, BsSun } from 'react-icons/bs'

const NavBarDropdown = (props) => {
    const navbar = useRef();

    const [open, setOpen] = useState();

    const handleClick = e => {
        if (navbar.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <div className="user-icon" ref={navbar}>
            <button className="profile-photo-nav" onClick={e => setOpen(!open)}>
                <img src={props.currentUser.photoUrl} />
            </button>
            {open &&
            <ul className="profile-nav-dropdown">
                <div className="nav-dropdown-user">
                    <li className="profile-thumbnail-dropdown">
                        <img src="https://s.ytimg.com/yts/img/avatar_48-vfllY0UTT.png" />
                    </li>
                    <li className="profile-dropdown-info">
                        <div className="profile-dropdown-info-user">
                            <span>{props.currentUser.username}</span>
                            <span>{props.currentUser.email}</span>
                        </div>
                        <Link to={`/users/${props.currentUser.id}`}><p>Manage your Google Account</p></Link>
                    </li>
                </div>
                <div className="nav-dropdown-info">
                    <Link to={`/users/${props.currentUser.id}`}>
                        <li>
                            <FaUser className="nav-dropdown-info-channel" /><span>Your channel</span>
                        </li>
                    </Link>
                        <li onClick={props.handleLogout}>
                            <BsBoxArrowRight className="nav-dropdown-info-item" /><span>Sign out</span>
                        </li>
                    {/* <li><BsSun className="nav-dropdown-info-channel-item"/><span>Dark theme: Off</span></li> */}
                </div>
            </ul>}
        </div>
    );
}

export default NavBarDropdown;