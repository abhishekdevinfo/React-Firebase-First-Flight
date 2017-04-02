import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAouBGLOJUMsdQU1AWqy6A31dll9szmXns",
    authDomain: "first-flight-a789d.firebaseapp.com",
    databaseURL: "https://first-flight-a789d.firebaseio.com",
    projectId: "first-flight-a789d",
    storageBucket: "first-flight-a789d.appspot.com",
    messagingSenderId: "208345922850"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();