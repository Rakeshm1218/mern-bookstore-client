// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "book-store-9df87.firebaseapp.com",
  projectId: "book-store-9df87",
  storageBucket: "book-store-9df87.appspot.com",
  messagingSenderId: "344630962879",
  appId: "1:344630962879:web:16b0968b6d6ecc3207740a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;