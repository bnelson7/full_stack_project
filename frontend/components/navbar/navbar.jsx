import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaUserCircle, FaCircle } from "react-icons/fa";
import { MdMoreVert, MdNotifications, MdSearch, MdVideoCall, MdMenu, MdApps } from 'react-icons/md'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
      this.props.logout()
  }

  render() {
    const { currentUser } = this.props
    
    const loggedInNav = (
      <div className="right-navbar">
          <div className="right-nav-icon">
                <MdVideoCall />
          </div>
          <div className="right-nav-icon">
            <MdApps />
          </div>
          <div className="right-nav-icon">
            <MdNotifications />
          </div>
          <div className="user-icon" onClick={this.handleLogout}>
            <FaCircle />
          </div>
      </div>
    )
    const notLoggedInNav = (
      <div className="right-navbar">
          <div className="right-nav-icon">
                <MdVideoCall />
          </div>
          <div className="right-nav-icon">
              <MdApps />
          </div>
          <div className="right-nav-icon">
            <MdMoreVert />
          </div>
          <div>
            <Link className="signin-button" to="/login">
              <span className="profile-icon"><FaUserCircle /></span>
              SIGN IN
            </Link>
          </div>
      </div>
    )
  
    return (
      <div className="header">
          <div className="navbar">

            <div className="left-navbar">
                <div className="menu">
                  <MdMenu />
                </div>
                <div className="logo">
                  <FaYoutube />
                  <Link to="/"></Link>
                <span className="title">AdTube</span>
                </div>
            </div>

            <div className="mid-navbar">
                <input type="text" className="search-bar" placeholder="Search"/>
                <button type="submit" className="search-button"><MdSearch /></button>
            </div>
            
            {currentUser ? loggedInNav : notLoggedInNav}

          </div>
      </div>
    );
  }

}

export default NavBar