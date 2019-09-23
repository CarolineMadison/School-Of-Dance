import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <div className="headerContainer">
        <h1 className="site-title">Ms. Martha's School of Dance<br />
          <small>Teaching the art of movement since 1966.</small>
        </h1>
        </div>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/students">Students</Link></li>
            <li><Link className="nav-link" to="/studios">Studios</Link></li>
            <li><Link className="nav-link" to="/studios">Teachers</Link></li>
            <li><Link className="nav-link" to="/studios">About</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default NavBar;