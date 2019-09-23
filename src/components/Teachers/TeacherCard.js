import React, { Component } from 'react';
import "./Teachers.css"
import { Link } from "react-router-dom";

class TeacherCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.props.teacher.photoUrl} alt="teacher" />
          </picture>
          <h2><span className="card-studentName">{this.props.teacher.name}</span></h2>
          <p>{this.props.teacher.classes}</p>
          <Link to={`/teachers/${this.props.teacher.id}`}><button>Teacher Profile</button></Link>
          <button type="button" onClick={() => this.props.deleteTeacher(this.props.student.id)}>Remove</button>
        </div>
      </div>
    );
  }
}
  export default TeacherCard;