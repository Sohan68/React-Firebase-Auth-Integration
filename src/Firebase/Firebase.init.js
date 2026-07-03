// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfHtkWayQTDqxN1q7SNNRFG8QHJ6klJOU",
  authDomain: "react-firebase-auth-integraton.firebaseapp.com",
  projectId: "react-firebase-auth-integraton",
  storageBucket: "react-firebase-auth-integraton.firebasestorage.app",
  messagingSenderId: "107091248583",
  appId: "1:107091248583:web:654857597d837cd0d705e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
