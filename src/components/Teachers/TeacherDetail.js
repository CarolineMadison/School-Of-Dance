import React, { Component } from 'react';
import TeacherManager from '../../modules/TeacherManager';

class TeacherDetail extends Component {

  state = {
    name: "",
    fullName: "",
    classes: "",
    email: "",
    mobile: "",
    photo: "",
    loadingStatus: true,
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
        photo: teacher.photo,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    TeacherManager.delete(this.props.teacherId)
    .then(() => this.props.history.push("/teachers"))
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
            {/* <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button> */}
        </div>
      </div>
    );
  }
}

export default TeacherDetail;