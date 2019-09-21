import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import StudentCard from './Students/StudentCard'
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/students" render={(props) => {
          return <StudentCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews