import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import StudentList from './Students/StudentList'
import StudentDetail from './Students/StudentDetail'
import TeacherList from './Teachers/TeacherList'
import TeacherDetail from './Teachers/TeacherDetail'
import StudentForm from './Students/StudentForm'
import TeacherForm from './Teachers/TeacherForm'
import StudentEditForm from './Students/StudentEditForm'
import TeacherEditForm from './Teachers/TeacherEditForm'
import Login from './Authentication/Login'
import StudioList from './Studios/StudioList'
import HomeAdminLoggedIn from './home/HomeAdminLoggedIn'
import Registration from './Authentication/Registration'
import Home from './home/Home'


class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
          return <HomeAdminLoggedIn {...props} />
          } else {
            return <Redirect to="/home" />
          }  
        }} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/students" render={(props) => {
          if (this.isAuthenticated()) {
          return <StudentList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/students/:studentId(\d+)" render={(props) => {
          return <StudentDetail studentId={parseInt(props.match.params.studentId)} {...props} />
        }} />
        <Route path="/students/new" render={(props) => {
          return <StudentForm {...props} />
        }} />
        <Route exact path="/studios" render={(props) => {
          if (this.isAuthenticated()) {
          return <StudioList {...props} />
          } else {
            return <Redirect to="/login" />
          }  
        }} />
        <Route exact path="/teachers" render={(props) => {
          if (this.isAuthenticated()) {
          return <TeacherList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/teachers/:teacherId(\d+)" render={(props) => {
          return <TeacherDetail teacherId={parseInt(props.match.params.teacherId)} />
        }} />
        <Route path="/teachers/new" render={(props) => {
          return <TeacherForm {...props} />
        }} />
        <Route path="/students/:studentId(\d+)/edit" render={props => {
          return <StudentEditForm {...props} />
        }}
        />
        <Route path="/teachers/:teacherId(\d+)/edit" render={props => {
            return <TeacherEditForm {...props} />
          }}
        />
        <Route path="/login" component={Login} />
        <Route exact path="/registration" render={props => {
          return <Registration {...props} />
        }} />
      
      </React.Fragment>
    )
  }
}

export default ApplicationViews