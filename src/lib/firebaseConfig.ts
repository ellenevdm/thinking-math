// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr_IcpDiDMh8Ph1J76KeKk-4-wmJmJziM",
  authDomain: "thinking-math.firebaseapp.com",
  projectId: "thinking-math",
  storageBucket: "thinking-math.firebasestorage.app",
  messagingSenderId: "86869030447",
  appId: "1:86869030447:web:f07efb1abd5c6128e9b8da",
  measurementId: "G-DKJWZ81P97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
