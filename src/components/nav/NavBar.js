import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Ms. Martha's School of Dance<br />
          <small>Teaching the art of movement since 1968.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/students">Students</Link></li>
            <li>Studios</li>
            <li>Teachers</li>
            <li>Artistic Director</li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default NavBar;