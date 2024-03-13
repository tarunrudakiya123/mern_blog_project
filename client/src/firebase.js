// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-59666.firebaseapp.com",
  projectId: "mern-blog-59666",
  storageBucket: "mern-blog-59666.appspot.com",
  messagingSenderId: "84909831811",
  appId: "1:84909831811:web:d6f738103d2c661dd38db6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
