import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaUserCircle } from "react-icons/fa";
import { MdMoreVert, MdNotifications, MdSearch, MdVideoCall, MdMenu, MdApps } from 'react-icons/md'
import NavBarDropdown from '../hooks/navbar_dropdown';
import SearchSuggest from '../search/search_suggest'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      queryString: "",
      switchAccount: false
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleSidebar = this.handleSidebar.bind(this)
    this.handleAccount = this.handleAccount.bind(this)
    this.handleDefault = this.handleDefault.bind(this)
    this.handleSwitchChannel = this.handleSwitchChannel.bind(this)
    this.getQueryString = this.getQueryString.bind(this)
    this.handleChannels = this.handleChannels.bind(this)
  }

  componentDidMount() {
    this.props.currentUser && 
    this.props.requestCurrentUser(this.props.currentUser.id)
      .then(() => {
        const channelId = localStorage.getItem('currentChannel')
        this.props.requestCurrentChannel(parseInt(channelId))
      })
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

  handleAccount() {
    this.setState({ switchAccount: true })
  }

  handleDefault() {
    this.setState({ switchAccount: false })
  }

  handleSwitchChannel(channelId) {
    this.props.requestCurrentChannel(channelId)
      .then(res => {
        const currentChannel = res.currentChannel.id
        localStorage.setItem('currentChannel', JSON.stringify(currentChannel))
      })
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
          currentChannel={this.props.currentChannel} 
          handleAccount={this.handleAccount}
          switchAccount={this.state.switchAccount}
          handleDefault={this.handleDefault}
          handleSwitchChannel={this.handleSwitchChannel}
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

  handleSearch(e, queryString, type) {
    debugger
    e.preventDefault();
    if (queryString) {
      debugger
      if (type === "channel") {
        debugger
        localStorage.setItem('recentChannelSearch', queryString) 
        localStorage.removeItem('recentVideoSearch') 
      } else {
        localStorage.removeItem('recentChannelSearch')
        localStorage.setItem('recentVideoSearch', queryString)
      }
      // not sure why i can't push state here
      this.props.history.push(`/results?search_query=${queryString}`)
    } else {
      debugger
      this.props.history.push(`/results?search_query=${this.state.queryString}`)
    }
  }
  
  getQueryString(e) {
    // localStorage.setItem('recentSearch', this.state.queryString)
    debugger
    e.type === "click" ? 
    this.setState({queryString: e.currentTarget.innerText}) : 
    this.setState({ queryString: e.currentTarget.value })
  }

  handleSidebar() {
    const { openModal, modal, closeModal } = this.props
    modal === 'sidebar' ? closeModal() : openModal({ type: 'sidebar' })
  }

  handleChannels() {
    debugger
    (!this.props.channels.length || this.props.channels.length !== this.props.totalChannels) && 
    this.props.requestChannels()
      .then(res => {
        const currentNumChannels = Object.values(res.channels).length
        debugger
        const totalChannels = localStorage.setItem('totalChannels', currentNumChannels)
        console.log(localStorage)
      })
  }

  render() {
    const { currentUser, currentChannel } = this.props
debugger
console.log(this.state)
    if (currentUser && !currentChannel) return null

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
                  {/* <input type="text" className="search-bar" placeholder="Search" value={this.state.queryString} onChange={this.getQueryString('queryString')}/> */}
                  <div onClick={this.handleChannels}>
                      <SearchSuggest 
                      value={this.state.queryString}  
                      getQueryString={this.getQueryString}
                      handleSearch={this.handleSearch}/>
                  </div>
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