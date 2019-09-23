import React, { Component } from 'react';
import TeacherManager from '../../modules/TeacherManager';

class TeacherDetail extends Component {

  state = {
    name: "",
    fullName: "",
    classes: "",
    email: "",
    mobile: "",
    photo: ""
  }

  componentDidMount(){
    TeacherManager.get(this.props.teacherId)
    .then((teacher) => {
      this.setState({
        name: teacher.name,
        fullName: teacher.fullName,
        classes: teacher.parents,
        email: teacher.email,
        mobile: teacher.mobile,
        photo: teacher.photoUrl
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.state.photo} />
          </picture>
            <h3><span style={{ color: 'darkslategrey' }}>{this.state.fullName}</span></h3>
            <p>{this.state.classes}</p>
            <p>{this.state.email}</p>
            <p>{this.state.mobile}</p>
        </div>
      </div>
    );
  }
}

export default TeacherDetail;