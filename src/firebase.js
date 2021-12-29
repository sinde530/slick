// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVXut03dHAgdD5kT5CXaWGMhnab2QsaPc",
  authDomain: "slack-yt-4b617.firebaseapp.com",
  projectId: "slack-yt-4b617",
  storageBucket: "slack-yt-4b617.appspot.com",
  messagingSenderId: "437572484728",
  appId: "1:437572484728:web:c3bb90252fad7ee108378d",
  measurementId: "G-SS56P0EJ59"
};

export default firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

