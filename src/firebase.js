import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //para autenticar y crear usarios
//storage
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // para usar el firestore
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBG1EBpcI72k05HyRtWodb92KwTqLUWUJo",
  authDomain: "unit-converter-35df1.firebaseapp.com",
  projectId: "unit-converter-35df1",
  storageBucket: "unit-converter-35df1.appspot.com",
  messagingSenderId: "134812175326",
  appId: "1:134812175326:web:71fe42f9352e46b851eb4f",
  measurementId: "G-SVCHR4FD8W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//autenticacion
export const auth = getAuth(app);
//storage
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

export const storage = getStorage();
