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
    this.handleModal = this.handleModal.bind(this)
    this.handleSidebar = this.handleSidebar.bind(this)
  }

  handleLogout(e) {
      e.preventDefault();
      this.props.logout()
      .then(() => {
        this.props.history.push('/')
        this.props.closeModal()
      })
  }

  handleModal(e) {
    e.preventDefault();
    this.props.openModal({type: 'upload'});
  }

  loggedInNav() {
    return (
      <div className="right-navbar">
          <div className="right-nav-icon">
            <MdVideoCall onClick={this.handleModal}/>
          </div>
          <div className="right-nav-icon">
            <MdApps />
          </div>
          <div className="right-nav-icon">
            <MdNotifications />
          </div>
          <NavBarDropdown 
          currentUser={this.props.currentUser} 
          handleLogout={this.handleLogout} 
          path={this.props.path} 
          />
      </div>
    )
  }

  notLoggedInNav() {
    return (
       <div className="right-navbar">
          <Link to="/login">
            <div className="right-nav-icon">
                <MdVideoCall />
            </div>
          </Link>
          <div className="right-nav-icon">
              <MdApps />
          </div>
          <div className="right-nav-icon">
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

  handleSidebar() {
    const { openModal, modal, closeModal } = this.props
    modal === 'sidebar' ? closeModal() : openModal({ type: 'sidebar' })
  }

  render() {
    const { currentUser } = this.props

    return (
      <div className="header">
          <div className="navbar">
            <div className="left-navbar">
                <div className="menu-container" onClick={this.handleSidebar}>
                  <MdMenu className="menu" />
                </div>
                <Link to="/">
                  <div className="title-logo-container">
                      <FaYoutube className="logo"/>
                      <span className="title">AdTube</span>
                  </div>
                </Link>
            </div>
            <form onSubmit={this.handleSearch}>
              <div className="mid-navbar">
                  <input type="text" className="search-bar" placeholder="Search" value={this.state.queryString} onChange={this.getQueryString('queryString')}/>
                  <button onClick={this.handleSearch} type="submit" className="search-button">
                      <MdSearch />
                  </button>
              </div>
            </form>
            {!currentUser ? this.notLoggedInNav() : this.loggedInNav()}
          </div>
      </div>
    );
  }

}

export default NavBar