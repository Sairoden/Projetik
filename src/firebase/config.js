import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkfntxVgvbn1q65s2SqqwxVxIcojLfRJI",
  authDomain: "projetik-f88e2.firebaseapp.com",
  projectId: "projetik-f88e2",
  storageBucket: "projetik-f88e2.appspot.com",
  messagingSenderId: "688017729152",
  appId: "1:688017729152:web:e65b85e036260129eaa865",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();

// Initialize Firebase Auth
const auth = getAuth();

export { db, auth };
