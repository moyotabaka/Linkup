// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiMZEmgfIedVuRqHTjhkoJKjwvCyhLUmc",
  authDomain: "linkup-4f542.firebaseapp.com",
  projectId: "linkup-4f542",
  storageBucket: "linkup-4f542.firebasestorage.app",
  messagingSenderId: "709688085486",
  appId: "1:709688085486:web:39bfc54253015217c51cff",
  measurementId: "G-PYCDSNFSTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

