// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYmGNq7o2ISYBwHupn5_-r4M1QZWJqgaw",
  authDomain: "ecommerce-4f38c.firebaseapp.com",
  projectId: "ecommerce-4f38c",
  storageBucket: "ecommerce-4f38c.appspot.com",
  messagingSenderId: "585023759055",
  appId: "1:585023759055:web:6c3988d26eb8dd09560dba",
  measurementId: "G-8GE0LVH5SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

console.log('connect');
console.log(app);



