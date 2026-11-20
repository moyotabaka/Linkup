mport { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyC1MZEmgfIedVuRqHTjhkoJKjwvCyhLUmc",
  authDomain: "linkup-4f542.firebaseapp.com",
  projectId: "linkup-4f542",
  storageBucket: "linkup-4f542.firebasestorage.app",
  messagingSenderId: "709688085486",
  appId: "1:709688085486:web:39bfc54253015217c51cff",
  measurementId: "G-PYCDSNF5TL"
};

export const configured = !Object.values(firebaseConfig).some((v) =>
  String(v).startsWith("PASTE_")
);

export const app = initializeApp(firebaseConfig);
