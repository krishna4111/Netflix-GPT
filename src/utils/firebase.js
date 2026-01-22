// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkEiawev07IodQi4cQfV8UxnRZTD1DgEE",
  authDomain: "netflixgpt-97093.firebaseapp.com",
  projectId: "netflixgpt-97093",
  storageBucket: "netflixgpt-97093.firebasestorage.app",
  messagingSenderId: "523116746819",
  appId: "1:523116746819:web:5b8b9a17fdccab269d9cf6",
  measurementId: "G-TYP85CEGFF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
