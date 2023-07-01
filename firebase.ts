// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXS0M27ZjE0mrlFk-R2mUj6PSr1pzG2uU",
  authDomain: "redesign-e6c17.firebaseapp.com",
  projectId: "amazon-redesign",
  storageBucket: "amazon-redesign.appspot.com",
  messagingSenderId: "75411276214",
  appId: "1:75411276214:web:2e5fd86712fbe6cc318117",
  measurementId: "G-E15KZGN82V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const analytics = getAnalytics(app);

export default app
export { auth }