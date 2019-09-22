import React, { Component } from 'react';

class StudentCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">Girl's Name</span></h3>
          <p>age: 10</p>
        </div>
      </div>
    );
  }
}

export default StudentCard;