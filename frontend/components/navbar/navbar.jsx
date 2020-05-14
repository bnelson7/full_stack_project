import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { MdMoreVert, MdNotifications, MdSearch, MdVideoCall, MdMenu, MdApps } from 'react-icons/md'
import NavBarDropdown from '../hooks/navbar_dropdown';

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      queryString: ""
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleLogout(e) {
      e.preventDefault()
      this.props.logout()
      .then(() => {
        this.props.history.push('/')
      })
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
          <NavBarDropdown currentUser={this.props.currentUser} handleLogout={this.handleLogout}/>
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