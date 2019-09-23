import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import StudentList from './Students/StudentList'

import StudioCard from './Studios/StudioCard'
import TeacherCard from './Teachers/TeacherCard'
import About from './About/About'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/students" render={(props) => {
          return <StudentList />
        }} />
        <Route path="/studios" render={(props) => {
          return <StudioCard />
        }} />
        <Route path="/teachers" render={(props) => {
          return <TeacherCard />
        }} />
        <Route path="/about" render={(props) => {
          return <About />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews