import React, { Component } from 'react';
import TeacherManager from '../../modules/TeacherManager';
import './TeacherForm.css'

class TeacherForm extends Component {
    state = {
        fullName: "",
        classes: "",
        email: "",
        mobile: "",
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
    constructNewTeacher = evt => {
        evt.preventDefault();
        if (this.state.fullName === "" || 
            this.state.classes === "" ||  
            this.state.email === "" || 
            this.state.mobile === "" )
            {
            window.alert("Please complete all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const teacher = {
                fullName: this.state.fullName,
                classes: this.state.classes,
                email: this.state.email,
                mobile: this.state.mobile,
            };

            // Create the teacher and redirect user to teacher list
            TeacherManager.post(teacher)
            .then(() => this.props.history.push("/teachers"));
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
                        id="fullName"
                        placeholder="Full Name"
                        />
                        <label htmlFor="fullName">First Name, Last</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="classes"
                        placeholder="Classes"
                        />
                        <label htmlFor="classes">Classes</label>
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
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewTeacher}
                        >Add New Teacher</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default TeacherForm