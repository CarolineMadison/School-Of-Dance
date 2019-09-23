import React, { Component } from 'react';

class StudentCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./SchoolOfDanceMainPhoto.png')} alt="teacher" />
          </picture>
          <h2>Name: <span className="card-petname">{this.props.student.name}</span></h2>
          <p>age: {this.props.student.age}</p>
        </div>
      </div>
    );
  }
}
  export default StudentCard;