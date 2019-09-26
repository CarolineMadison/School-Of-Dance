import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SchoolOfDance from './components/SchoolOfDance'
import { BrowserRouter as Router } from "react-router-dom"
import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAYDHybdCvnRv7K4Dw1Cb1UU9Q-DlpWuKA",
    authDomain: "school-of-dance.firebaseapp.com",
    databaseURL: "https://school-of-dance.firebaseio.com",
    projectId: "school-of-dance",
    storageBucket: "school-of-dance.appspot.com",
    messagingSenderId: "56655250795",
    appId: "1:56655250795:web:ab6c5f73516692be5c382e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

ReactDOM.render(
    <Router>
        <SchoolOfDance />
    </Router>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
