// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnBqZqD89_vCkDd5N66mEK-v8iMVIdAIc",
  authDomain: "comeata-fd956.firebaseapp.com",
  projectId: "comeata-fd956",
  storageBucket: "comeata-fd956.appspot.com",
  messagingSenderId: "374654097916",
  appId: "1:374654097916:web:46f95f03fc39a472c2ba79",
  measurementId: "G-LLJB3GDBM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new FacebookAuthProvider();
export {auth, provider}