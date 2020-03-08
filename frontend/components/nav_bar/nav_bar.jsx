import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, logout }) => {
    return (
        <div>
            <nav className="nav-bar-container">
                <button className="hamburger"><i className="fa fa-bars"></i></button>
                {/* <span className="ad-logo"><i className="fas fa-ad"></i></span> */}
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBQz_TgYdSCUxHRe6X4rIxU1TBohn1WfMNfSBWgvBnMAgXKZFF" />
                    <form className="search" action="action_page.php" method="GET">
                        <input type="text" placeholder="Search" name="search" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                    {/* <i class="far fa-user-circle"></i> */}
                    <Link className="button" to="/login">SIGN IN</Link>
            </nav>
        </div>
    )
}

export default NavBar