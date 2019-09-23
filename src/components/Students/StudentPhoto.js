// User can upload a photo *FIREBASE*
import React, { Component } from 'react';
import UsersManager from '../../modules/UsersManager'
import * as firebase from 'firebase/app';
import 'firebase/storage';

class ProfilePhoto extends Component {
    state = {
        photo: null
    };

    submitForm = () => {
        // step 1: save Image to Firebase
        const imagesRef = firebase.storage().ref('images');
        const childRef = imagesRef.child(`${this.state.username}-${Date.now()}`);
        childRef.put(this.state.photo)
            // step 2: get url from firebase
            .then(response => response.ref.getDownloadURL())
            // step 3: save everything to json server
            .then(url => {
                console.log(url)
                const activeUserId = parseInt(sessionStorage.getItem("credentials"))
                return UsersManager.patchUser(activeUserId, {
                    photoUrl: url
                });
            })
            .then(() => this.props.history.push('/student'));
    }

    render() {
        return (
            <div className="image-form__container">
                <header>
                    Add a Photo
                </header>
                <fieldset>
                    <input
                    type="file"
                    required
                    id="photo"
                    placeholder="User Photo"
                    onChange={(e) => this.setState({ photo: e.target.files[0] })}
                    />
                    <button onClick={this.submitForm} type="submit">
                        Save Photo
                    </button>
                </fieldset>
            </div>
        )
    }
}        

export default ProfilePhoto