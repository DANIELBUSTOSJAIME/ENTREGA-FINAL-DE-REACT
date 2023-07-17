// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCltbD_vezN358l0pPMaUZrrd4voisPQiI",
  authDomain: "rightnow-2f338.firebaseapp.com",
  projectId: "rightnow-2f338",
  storageBucket: "rightnow-2f338.appspot.com",
  messagingSenderId: "664262957547",
  appId: "1:664262957547:web:cb196ed0c291b9910121ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)