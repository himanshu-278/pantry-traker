import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Import Realtime Database

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
const db = getFirestore(app);
const realtimeDb = getDatabase(app); // Initialize Realtime Database

export { db, realtimeDb };
