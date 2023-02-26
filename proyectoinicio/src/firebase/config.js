// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCCH9nZSvIM1feRZgYMYfquKBMozTswvoQ",
  authDomain: "proyecto-sist-info.firebaseapp.com",
  projectId: "proyecto-sist-info",
  storageBucket: "proyecto-sist-info.appspot.com",
  messagingSenderId: "938795216556",
  appId: "1:938795216556:web:0b7277d8b932e54d647909",
  measurementId: "G-Q7EF4D29GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app) // Conexion con el modulo de Autenticacion de Firebase
export const db = getFirestore(app) // Conexion con el modulo de Base de datos de Firebase
export const store = getStorage(app) // Conexion con el modulo de Storage de Firebase

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"});