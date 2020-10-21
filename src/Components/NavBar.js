import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src="https://www.flaticon.com/svg/static/icons/svg/3039/3039386.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" >Popular</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/upcoming" >Upcoming</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nowplaying" >Now Playing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/toprated" >Top Rated</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar