import React, { Component } from 'react';
import "./Studio.css"


class StudioCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.props.studio.photo} alt="student" />
          </picture>
          <h2><span className="card-studentName">{this.props.studio.name}</span></h2>
        </div>
      </div>
    );
  }
}
  export default StudioCard;