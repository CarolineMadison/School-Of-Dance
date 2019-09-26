import React, { Component } from 'react';
import StudentManager from '../../modules/StudentManager';

class StudentDetail extends Component {

  state = {
      firstName: "",
      lastName: "",
      parents: "",
      email: "",
      mobile: "",
      birthdate: "",
      grade: "",
      school: "",
      focus: "",
      photo: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("StudentDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    StudentManager.get(this.props.studentId)
    .then((student) => {
      this.setState({
        firstName: student.firstName,
        lastName: student.lastName,
        parents: student.parents,
        email: student.email,
        mobile: student.mobile,
        birthdate: student.birthdate,
        grade: student.grade,
        school: student.school,
        focus: student.focus,
        photo: student.photo,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    StudentManager.delete(this.props.studentId)
    .then(() => this.props.history.push("/students"))
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.state.photo} alt="student" />
          </picture>
            <h3><span style={{ color: 'darkslategrey' }}>{this.state.firstName} {this.state.lastName}</span></h3>
            <p>{this.state.parents}</p>
            <p>{this.state.email}</p>
            <p>{this.state.mobile}</p>
            <p>{this.state.birthdate}</p>
            <p>{this.state.grade}</p>
            <p>{this.state.school}</p>
            <p>{this.state.focus}</p>
        </div>
      </div>
    );
  }
}

export default StudentDetail;