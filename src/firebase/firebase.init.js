// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2BFFAN_-lx95bE5rVf_fvjlKo4EkJXAI",
  authDomain: "simple-firebase-2-624c9.firebaseapp.com",
  projectId: "simple-firebase-2-624c9",
  storageBucket: "simple-firebase-2-624c9.firebasestorage.app",
  messagingSenderId: "512536951598",
  appId: "1:512536951598:web:552cbc99742f63fe0398bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



