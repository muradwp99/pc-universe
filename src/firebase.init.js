// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFZEw_QvBS3ABXlWNRZEXgum8lQ6l83xo",
    authDomain: "perlic-tools.firebaseapp.com",
    projectId: "perlic-tools",
    storageBucket: "perlic-tools.appspot.com",
    messagingSenderId: "289004774321",
    appId: "1:289004774321:web:1afa54116308fd3c81d390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;