// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDSBGLYiJgxWTqvw29CojhrHcmHMoA-x2U',
  authDomain: 'satellite-580a3.firebaseapp.com',
  projectId: 'satellite-580a3',
  storageBucket: 'satellite-580a3.appspot.com',
  messagingSenderId: '30884347932',
  appId: '1:30884347932:web:f6fd34a172d1aac57cdfd9',
  measurementId: 'G-RSW9Z5EQGD',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth, db, app };
