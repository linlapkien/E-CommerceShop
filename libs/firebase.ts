// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: 'e-shop-tutorial-6f29d.firebaseapp.com',
  projectId: 'e-shop-tutorial-6f29d',
  storageBucket: 'e-shop-tutorial-6f29d.appspot.com',
  messagingSenderId: '784554756281',
  appId: '1:784554756281:web:b2c89b1db993ece6377368',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
