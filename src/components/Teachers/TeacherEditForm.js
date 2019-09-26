import React, { Component } from "react"
import TeacherManager from "../../modules/TeacherManager"
import "./TeacherForm.css"

class TeacherEditForm extends Component {
    //set the initial state
    state = {
      fullName: "",
      classes: "",
      email: "",
      mobile: "",
      photo: null,
      loadingStatus: false,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingTeacher = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedTeacher = {
        id: this.props.match.params.teacherId,
        fullName: this.state.fullName,
        classes: this.state.classes,
        email: this.state.email,
        mobile: this.state.mobile,
        photo: this.state.photo
      };

      TeacherManager.update(editedTeacher)
      .then(() => this.props.history.push("/teachers"))
    }

    componentDidMount() {
      TeacherManager.get(this.props.match.params.teacherId)
      .then(teacher => {
          this.setState({
            fullName: teacher.fullName,
            classes: teacher.classes,
            email: teacher.email,
            mobile: teacher.mobile,
            photo: teacher.photo,
            loadingStatus: false,
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
                id="fullName"
                value={this.state.fullName}
              />
              <label htmlFor="fullName">Full Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="classes"
                value={this.state.classes}
              />
              <label htmlFor="breed">Classes</label>

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
              <label htmlFor="breed">Mobile</label>


            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingTeacher}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default TeacherEditForm