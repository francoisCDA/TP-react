// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVj63EezrvE5ptD13zGIQN-IKwsiqiSWc",
  authDomain: "tp-17oct.firebaseapp.com",
  databaseURL: "https://tp-17oct-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tp-17oct",
  storageBucket: "tp-17oct.appspot.com",
  messagingSenderId: "1080911288426",
  appId: "1:1080911288426:web:b241484c3fe5c61968d213"
};

export const BASE_DB_URL = firebaseConfig.databaseURL
export const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`
export const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`

// Initialize Firebase
const app = initializeApp(firebaseConfig);

