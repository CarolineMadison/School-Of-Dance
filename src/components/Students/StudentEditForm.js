import React, { Component } from "react"
import StudentManager from "../../modules/StudentManager"
import "./StudentForm.css"

class StudentEditForm extends Component {
    //set the initial state
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
        photo: null,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingStudent = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedStudent = {
        id: this.props.match.params.studentId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        parents: this.state.parents,
        email: this.state.email,
        mobile: this.state.mobile,
        birthdate: this.state.birthdate,
        grade: this.state.grade,
        school: this.state.school,
        focus: this.state.focus,
        photo: this.state.photo,
        loadingstatus: false
      };

      StudentManager.update(editedStudent)
      .then(() => this.props.history.push("/students"))
    }

    componentDidMount() {
      StudentManager.get(this.props.match.params.studentId)
      .then(student => {
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
            photo: student.photo
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="firstName"
                value={this.state.firstName}
              />
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="lastName"
                value={this.state.lastName}
              />
              <label htmlFor="lastName">Last Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="parents"
                value={this.state.parents}
              />
              <label htmlFor="parents">Parents</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="email"
                value={this.state.email}
              />
              <label htmlFor="email">Email</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="mobile"
                value={this.state.mobile}
              />
              <label htmlFor="mobile">Mobile</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="birthdate"
                value={this.state.birthdate}
              />
              <label htmlFor="birthdate">Birthdate</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="grade"
                value={this.state.grade}
              />
              <label htmlFor="grade">Grade</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="school"
                value={this.state.school}
              />
              <label htmlFor="school">School</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="focus"
                value={this.state.focus}
              />
              <label htmlFor="focus">Focus</label>
              
            </div>

            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingStudent}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default StudentEditForm