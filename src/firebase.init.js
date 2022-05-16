// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM7olAHcgR68eQESCtFFoKcf6S1wGtmQg",
  authDomain: "doctors-portal-177df.firebaseapp.com",
  projectId: "doctors-portal-177df",
  storageBucket: "doctors-portal-177df.appspot.com",
  messagingSenderId: "17064604658",
  appId: "1:17064604658:web:7a48a03efe793567feb16b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
