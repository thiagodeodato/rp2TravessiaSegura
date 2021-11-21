// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import { getDatabase} from 'firebase/database';
import {getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUPe1mvBCKXEdksxkLB4a-0cXExvK8FXY",
  authDomain: "rp2teste.firebaseapp.com",
  databaseURL: "https://rp2teste-default-rtdb.firebaseio.com",
  projectId: "rp2teste",
  storageBucket: "rp2teste.appspot.com",
  messagingSenderId: "233860192044",
  appId: "1:233860192044:web:4a643bb06d037eee773e89",
  measurementId: "G-CFC5SGSDL4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default firebase;