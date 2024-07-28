// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASA5jdPLtBmZaecxu_ZnCdZKmAv9LiOYM",
  authDomain: "netflix-clone-983e5.firebaseapp.com",
  projectId: "netflix-clone-983e5",
  storageBucket: "netflix-clone-983e5.appspot.com",
  messagingSenderId: "1089687681064",
  appId: "1:1089687681064:web:a957ce133ffaf882781d1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

console.log('Auth:', auth);
console.log('DB:', db);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
