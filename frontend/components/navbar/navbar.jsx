import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaUserCircle, FaCircle } from "react-icons/fa";
import { MdMoreVert, MdNotifications, MdSearch, MdVideoCall, MdMenu, MdApps } from 'react-icons/md'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleLogout(e) {
      e.preventDefault()
      this.props.logout()
      // .then(res => {
      //   this.props.history.push('/')
      // })
  }

  handleSearch(e) {
    e.preventDefault()
    this.props.history.push('/search')
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
            <div className="profile-photo-nav">
                <img src={currentUser.photoUrl} />
            </div>
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
                <Link to="/">
                  <div className="logo">
                      <FaYoutube />
                      <span className="title">AdTube</span>
                  </div>
                </Link>
            </div>
            <form onSubmit={this.handleSearch}>
              <div className="mid-navbar">
                  <input type="text" className="search-bar" placeholder="Search"/>
                  <button type="submit" className="search-button"><MdSearch /></button>
              </div>
            </form>
            {currentUser ? loggedInNav : notLoggedInNav}

          </div>
      </div>
    );
  }

}

export default NavBar