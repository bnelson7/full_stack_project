import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, logout }) => {
    return (
        <div className="main-nav-container">
            <nav className="nav-bar-container">
                
                <div className="left-container">
                    <div className="hamburger"><i className="fas fa-bars"></i></div>
                    <div className="youtube-logo"><i class="fab fa-youtube"></i><Link to="/"></Link></div>
                    {/* <div className="ad-icon"><i className="fas fa-ad"></i></div> */}
                    <div className="title">AdTube</div>
                </div>

                    <div className="mid-container">
                        <form action="">
                            <div className="search-bar">
                                <input type="text" className="search-input" placeholder="Search"/>
                                <button type="submit" className="search-button"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>

                <div className="right-container">
                    <div><i class="fas fa-video"></i></div>
                    <div><i class="fas fa-th"></i></div>
                    <div><i class="fas fa-ellipsis-v"></i></div>
                    <div><Link className="signin-button" to="/login"><span className="profile-icon"><i className="fas fa-user-circle"></i></span>SIGN IN</Link></div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar