import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import StudentList from './Students/StudentList'
import StudentDetail from './Students/StudentDetail'
import StudioCard from './Studios/StudioCard'
import TeacherCard from './Teachers/TeacherCard'
import About from './About/About'
import TeacherList from './Teachers/TeacherList'
import TeacherDetail from './Teachers/TeacherDetail'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/students" render={(props) => {
          return <StudentList />
        }} />
        <Route path="/students/:studentId(\d+)" render={(props) => {
          return <StudentDetail studentId={parseInt(props.match.params.studentId)} />
        }} />
        <Route path="/studios" render={(props) => {
          return <StudioCard />
        }} />
        <Route exact path="/teachers" render={(props) => {
          return <TeacherList />
        }} />
        <Route path="/teachers/:teacherId(\d+)" render={(props) => {
          return <TeacherDetail teacherId={parseInt(props.match.params.teacherId)} />
        }} />
        <Route path="/about" render={(props) => {
          return <About />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews