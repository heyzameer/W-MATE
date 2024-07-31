import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// GoogleAuthProvider
const firebaseConfig = {
  apiKey: "AIzaSyB21cKlfweo-ubthJmy6Y2KgiRhoJWAy08",
  authDomain: "waste-management-eec64.firebaseapp.com",
  databaseURL: "https://waste-management-eec64-default-rtdb.firebaseio.com",
  projectId: "waste-management-eec64",
  storageBucket: "waste-management-eec64.appspot.com",
  messagingSenderId: "139274805458",
  appId: "1:139274805458:web:59be38857793f5eb400d0b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const authes =
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export { auth, db, provider };
