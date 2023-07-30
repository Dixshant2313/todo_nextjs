import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDnFme3DiaqsrH-HW8X8HSt7BKBfF37ijk",
  authDomain: "fir-todo-app-7f27e.firebaseapp.com",
  projectId: "fir-todo-app-7f27e",
  storageBucket: "fir-todo-app-7f27e.appspot.com",
  messagingSenderId: "687413235638",
  appId: "1:687413235638:web:6f05d751aae121ec613b17"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();