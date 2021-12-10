// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5XPWEhXuea5RufYb-pLSkzdPIOp42Lqs",
  authDomain: "books-at-ease.firebaseapp.com",
  projectId: "books-at-ease",
  storageBucket: "books-at-ease.appspot.com",
  messagingSenderId: "35799797743",
  appId: "1:35799797743:web:7dad271759c36ca172701a"
};

// Initialize Firebase
let app;
if (getApps.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp()
}

const auth = getAuth(app);
const db = getFirestore(app);


export { auth };
export { db };
