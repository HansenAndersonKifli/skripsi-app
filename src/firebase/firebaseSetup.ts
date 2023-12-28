import { initializeApp } from 'firebase/app';
import { NextOrObserver, User, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBx5CMTHG1GWLbOBvv2WSyRHSqcxLsTILI",
  authDomain: "third-fold-393618.firebaseapp.com",
  projectId: "third-fold-393618",
  storageBucket: "third-fold-393618.appspot.com",
  messagingSenderId: "432781593084",
  appId: "1:432781593084:web:48a4f38ad27ca6bfa0ca79",
  measurementId: "G-0DS2XY7ZP6"
};

// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();

// export function getFirebaseConfig() {
//   if(!firebaseConfig || !firebaseConfig.apiKey) {
//     throw new Error('No Firebase configuration object provided.' + '\n' +
//     'Add your web app\'s configuration object to firebase-config.ts');
//   } else {
//     return firebaseConfig;
//   }
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export const firestore = firebase.firestore()
export default app;

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.ts');
  } else {
    return firebaseConfig;
  }
}    

