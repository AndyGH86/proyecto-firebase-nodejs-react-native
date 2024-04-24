import firebase from 'firebase'
import'firebase/firestore'
import { initializeApp } from "firebase/app";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBecRXuGuI6p-8lWVYwBFiL-OE7dzdUbzU",
  authDomain: "data-base-proyecto-1.firebaseapp.com",
  projectId: "data-base-proyecto-1",
  storageBucket: "data-base-proyecto-1.appspot.com",
  messagingSenderId: "332329280429",
  appId: "1:332329280429:web:edd7d60daf481bacc9b724",
  measurementId: "G-V8BF678GB9"
};
  
const app = initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
    firebase,
    db
  }