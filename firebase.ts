// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtT9PJerqOZbPYEe52HHy5L_rfJVEFZsU",
  authDomain: "clone-9fe31.firebaseapp.com",
  projectId: "clone-9fe31",
  storageBucket: "clone-9fe31.appspot.com",
  messagingSenderId: "1089819978826",
  appId: "1:1089819978826:web:be229cde8f816f8d1b4ab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export default app
export {auth}

