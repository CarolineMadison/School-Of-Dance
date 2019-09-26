import React, { Component } from 'react';
import TeacherManager from '../../modules/TeacherManager';
import './TeacherForm.css'
import * as firebase from 'firebase/app';
import 'firebase/storage';

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
            // this.setState({ loadingStatus: true });
            // step 1: save Image to Firebase
            const imagesRef = firebase.storage().ref('images');
            const childRef = imagesRef.child(`${this.state.name}-${Date.now()}`);
            childRef.put(this.state.photo)
            // step 2: get url from firebase
            .then (response => response.ref.getDownloadURL())
            // step 3: save everything to json server
            .then (url => {
            const newTeacher = {
                fullName: this.state.fullName,
                classes: this.state.classes,
                email: this.state.email,
                mobile: this.state.mobile,
                photo: url
            }
                return TeacherManager.post(newTeacher)
        })
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
                        <input
                            type="file"
                            placeholder="Student Photo"
                            onChange={(e) => this.setState({ photo: e.target.files[0] })}
                        />
                        <label>Student Photo</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewTeacher}
                        >Save</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default TeacherForm