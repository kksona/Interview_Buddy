// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIgcOnRcbByWYM5KApNSI6-xQ3c-L-D5Q",
  authDomain: "interview-buddy-e4932.firebaseapp.com",
  projectId: "interview-buddy-e4932",
  storageBucket: "interview-buddy-e4932.firebasestorage.app",
  messagingSenderId: "466054558150",
  appId: "1:466054558150:web:2ad53ecdc3fb4c5ab4c2c7",
  measurementId: "G-CMYYXF9075"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);