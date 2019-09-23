import React, { Component } from 'react';
import "./Students.css"

class StudentCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.props.student.photoUrl} alt="teacher" />
          </picture>
          <h2><span className="card-studentName">{this.props.student.firstName} {this.props.student.lastName}</span></h2>
          <p>{this.props.student.birthdate}</p>
          <p>{this.props.student.focus}</p>
        </div>
      </div>
    );
  }
}
  export default StudentCard;