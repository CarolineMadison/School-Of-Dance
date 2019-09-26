import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <>
      <div>
        <p>Martha Madison, Artistic Director</p>
      </div>
      <div className="btn">
        <Link to={`/login`}><button>Administrator Login</button></Link>
      </div>
      <picture>
        <img src={require('./JosephDanceApp.jpg')} alt="boy" />
      </picture>
      <address>
        Pedigo Way
        <br />Bowling Green, Kentucky 42014
      </address>
     </>
    )
  }
}

export default Home