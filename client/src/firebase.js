
import { initializeApp } from 'firebase/app';



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
