// // Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
console.log
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog2-98f95.firebaseapp.com",
  projectId: "blog2-98f95",
  storageBucket: "blog2-98f95.appspot.com",
  messagingSenderId: "1009243082933",
  appId: "1:1009243082933:web:d9465762db2fcc555eeefc"
};


// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
