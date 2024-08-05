
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9djMnPyE6L2D_nK0FG0FLX4Rf_-JTgsc",
  authDomain: "star-wars-75bde.firebaseapp.com",
  projectId: "star-wars-75bde",
  storageBucket: "star-wars-75bde.appspot.com",
  messagingSenderId: "1039362978864",
  appId: "1:1039362978864:web:40da44843cd0fd6c6ee9f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export  {app, auth};