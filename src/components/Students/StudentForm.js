import React, { Component } from 'react';
import StudentManager from '../../modules/StudentManager';
import './StudentForm.css'

class StudentForm extends Component {
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
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create student object, invoke the Student Manager post method, and redirect to the full student list
    */
    constructNewStudent = evt => {
        evt.preventDefault();
        if (this.state.firstName === "" || 
            this.state.lastName === "" || 
            this.state.parents === "" || 
            this.state.email === "" || 
            this.state.mobile === "" ||
            this.state.birthdate === "" ||
            this.state.school === "" ||
            this.state.focus === "" ) 
            {
            window.alert("Please complete all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const student = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                parents: this.state.parents,
                email: this.state.email,
                mobile: this.state.mobile,
                birthdate: this.state.birthdate,
                school: this.state.school,
                focus: this.state.focus
            };

            // Create the student and redirect user to student list
            StudentManager.post(student)
            .then(() => this.props.history.push("/students"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="studentFirstName"
                        placeholder="First Name"
                        />
                        <label htmlFor="studentFirstName">First Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="studentLastName"
                        placeholder="Last Name"
                        />
                        <label htmlFor="studentLastName">Last Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="parents"
                        placeholder="Parents"
                        />
                        <label htmlFor="parents">Parents</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="email"
                        placeholder="Email"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="mobile"
                        placeholder="Mobile"
                        />
                        <label htmlFor="mobile">Mobile</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="birthdate"
                        placeholder="Birthdate"
                        />
                        <label htmlFor="birthdate">Birthdate</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="grade"
                        placeholder="Grade"
                        />
                        <label htmlFor="grade">Grade</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="school"
                        placeholder="School"
                        />
                        <label htmlFor="school">School</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="focus"
                        placeholder="Focus"
                        />
                        <label htmlFor="focus">Focus</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewStudent}
                        >Enroll</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default StudentForm