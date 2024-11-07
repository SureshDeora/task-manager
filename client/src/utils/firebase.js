// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-2d9d4.firebaseapp.com",
  projectId: "taskmanager-2d9d4",
  storageBucket: "taskmanager-2d9d4.appspot.com",
  messagingSenderId: "161863454092",
  appId: "1:161863454092:web:89d4c57851fd69c901daa9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);