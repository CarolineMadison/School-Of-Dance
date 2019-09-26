import React, { Component } from 'react'
import './Home.css'

class HomeAdminLoggedIn extends Component {
  render() {
    return (
      <>
      <div>
        <p>Martha Madison, Artistic Director</p>
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

export default HomeAdminLoggedIn