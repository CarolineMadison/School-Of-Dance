import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import StudentList from './Students/StudentList'
import StudentDetail from './Students/StudentDetail'
import StudioCard from './Studios/StudioCard'
import About from './About/About'
import TeacherList from './Teachers/TeacherList'
import TeacherDetail from './Teachers/TeacherDetail'
import StudentForm from './Students/StudentForm'
import TeacherForm from './Teachers/TeacherForm'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/students" render={(props) => {
          return <StudentList {...props} />
        }} />
        <Route path="/students/:studentId(\d+)" render={(props) => {
          return <StudentDetail studentId={parseInt(props.match.params.studentId)} {...props} />
        }} />
        <Route path="/students/new" render={(props) => {
          return <StudentForm {...props} />
        }} />
        <Route path="/studios" render={(props) => {
          return <StudioCard />
        }} />
        <Route exact path="/teachers" render={(props) => {
          return <TeacherList {...props} />
        }} />
        <Route path="/teachers/:teacherId(\d+)" render={(props) => {
          return <TeacherDetail teacherId={parseInt(props.match.params.teacherId)} />
        }} />
        <Route path="/teachers/new" render={(props) => {
          return <TeacherForm {...props} />
        }} />
        <Route path="/about" render={(props) => {
          return <About />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews