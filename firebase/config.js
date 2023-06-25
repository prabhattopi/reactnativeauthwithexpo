// Import the functions you need from the SDKs you need
import firebase from "firebase/compat"
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiGy6aKSofXj8xp514w4KuxAfzhtLxH8U",
  authDomain: "mobauth2.firebaseapp.com",
  projectId: "mobauth2",
  storageBucket: "mobauth2.appspot.com",
  messagingSenderId: "1001179877915",
  appId: "1:1001179877915:web:8410b9b92304500c5e5ebe"
};

// Initialize
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };