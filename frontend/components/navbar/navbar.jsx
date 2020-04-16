import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdApps } from 'react-icons/md'
import { MdMoreVert } from 'react-icons/md'
import { MdSearch } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'

const NavBar = ({ currentUser, logout }) => {
    return (

        <header className="navbar">

          <div className="left-navbar">
            <div className="menu">
              <MdMenu />
            </div>
            <div className="logo">
              <FaYoutube />
              <Link to="/"></Link>
            </div>
            <span className="title">AdTube</span>
            
          </div>

          <div className="mid-navbar">

              <div className="search-bar">
                <input type="text" className="search-input" placeholder="Search"/>
              </div>
                <button type="submit" className="search-button"><MdSearch /></button>

          </div>

          <div className="right-navbar">

            <div className="video-icon">
                <MdVideoCall />
            </div>
            <div className="apps-icon">
              <MdApps />
            </div>
            <div className="settings-icon">
              <MdMoreVert />
            </div>
            <div>
              <Link className="signin-button" to="/login">
                <span className="profile-icon">
                  <FaUserCircle />
                </span>
                SIGN IN
              </Link>
            </div>

          </div>

        </header>
    );
}

export default NavBar