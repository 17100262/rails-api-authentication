import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
        
        
        <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to='/home'>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/signin'>Sign In</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/signup'>Sign Up</Link>
            </li>
        </ul>
        </nav>

    )
  }
}
