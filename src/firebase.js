// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSum_a8W6lgl7JScjvawsyWB_NRtsldGM",
  authDomain: "pet-heaven-cd47b.firebaseapp.com",
  projectId: "pet-heaven-cd47b",
  storageBucket: "pet-heaven-cd47b.firebasestorage.app",
  messagingSenderId: "507560032227",
  appId: "1:507560032227:web:06bb62a1302da8112e12d6",
  measurementId: "G-YN3428FJK7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
export const db=getFirestore()