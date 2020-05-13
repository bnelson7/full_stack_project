import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaUserCircle, FaCircle, FaUser } from "react-icons/fa";
import { MdMoreVert, MdNotifications, MdSearch, MdVideoCall, MdMenu, MdApps } from 'react-icons/md'
import { BsBoxArrowRight, BsSun } from 'react-icons/bs'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      queryString: "",
      dropdown: false
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  handleLogout(e) {
      e.preventDefault()
      
      this.props.logout()
      .then(() => {
        this.props.history.push('/')
      })
  }

  handleDropdown(e) {
    e.preventDefault();
    // const dropdown = document.querySelector('.profile-nav-dropdown')
    // dropdown.classList.toggle("profile-nav-dropdown-clicked")
    this.setState({ dropdown: true })
  }

  loggedInNav() {
    return (
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
          <div className="user-icon" onClick={this.handleDropdown}>
            <div className="profile-photo-nav">
              <img src={this.props.currentUser.photoUrl} />
            </div>
          </div>
          {this.state.dropdown ? 
          <ul className="profile-nav-dropdown">
              <div className="nav-dropdown-user">
                <li className="profile-thumbnail-dropdown">
                  <img src="https://s.ytimg.com/yts/img/avatar_48-vfllY0UTT.png" />
                </li>
                <li className="profile-dropdown-info">
                  <div className="profile-dropdown-info-user">
                    <span>{this.props.currentUser.username}</span>
                    <span>{this.props.currentUser.email}</span>
                  </div>
                  <Link to={`/users/${this.props.currentUser.id}`}><p>Manage your Google Account</p></Link>
                </li>
              </div>
              <div className="nav-dropdown-info">
                <Link to={`/users/${this.props.currentUser.id}`}>
                  <li>
                    <FaUser className="nav-dropdown-info-channel"/><span>Your channel</span>
                  </li>
                </Link>
                <li onClick={this.handleLogout}>
                  <BsBoxArrowRight className="nav-dropdown-info-item"/><span>Sign out</span>
                </li>
                {/* <li><BsSun className="nav-dropdown-info-channel-item"/><span>Dark theme: Off</span></li> */}
              </div>
          </ul> : null}
      </div>
    )
  }

  notLoggedInNav() {
    return (
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
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.history.push(`/results?search_query=${this.state.queryString}`)
    
  }
  
  getQueryString(e) {
    localStorage.setItem('recentSearch', this.state.queryString)
    
    return e => {
      this.setState({ queryString: e.currentTarget.value })
    }
  }

  render() {
    const { currentUser } = this.props

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
                  <input type="text" className="search-bar" placeholder="Search" value={this.state.queryString} onChange={this.getQueryString('queryString')}/>
                  <button onClick={this.handleSearch} type="submit" className="search-button"><MdSearch /></button>
              </div>
            </form>
            {!currentUser ? this.notLoggedInNav() : this.loggedInNav()}
          </div>
      </div>
    );
  }

}

export default NavBar