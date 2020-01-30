import React from 'react';
import * as firebase from 'firebase';
import 'firebase/auth';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBFP79l3p4zGDdZpgIE1q0PMvYyCSmjJqU",
    authDomain: "kaefer-logistik.firebaseapp.com",
    databaseURL: "https://kaefer-logistik.firebaseio.com",
    projectId: "kaefer-logistik",
    storageBucket: "kaefer-logistik.appspot.com",
    messagingSenderId: "715421392126",
    appId: "1:715421392126:web:71d6aeb698caf924a819af"
});

export default  firebaseConfig;


