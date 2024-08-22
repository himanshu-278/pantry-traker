// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX7CzcRwaYOnD1eQ8gBoJyr2kYdbJHlwk",
  authDomain: "pantry-tracker-82426.firebaseapp.com",
  databaseURL: "https://pantry-tracker-82426-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pantry-tracker-82426",
  storageBucket: "pantry-tracker-82426.appspot.com",
  messagingSenderId: "1073867150701",
  appId: "1:1073867150701:web:ec5909fbf4720c1e3a7664",
  measurementId: "G-P3H95TZ1G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { db };
