// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyDL4YY8k96Dnu1cheZ768fA7xQ5EyyaI",
  authDomain: "signup-or-login-in-food-loader.firebaseapp.com",
  projectId: "signup-or-login-in-food-loader",
  storageBucket: "signup-or-login-in-food-loader.appspot.com",
  messagingSenderId: "1094255110519",
  appId: "1:1094255110519:web:86a49129e8c5f3d8c19972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;