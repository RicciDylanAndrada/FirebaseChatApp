import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPb9-JbXBO-8f7kslwwsFxyPraderni1I",
  authDomain: "fir-chat-5a9f8.firebaseapp.com",
  projectId: "fir-chat-5a9f8",
  storageBucket: "fir-chat-5a9f8.appspot.com",
  messagingSenderId: "378024219395",
  appId: "1:378024219395:web:c4b72f74b9cf4c49d98f36",
  measurementId: "G-25BDVG3T24"
})
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };