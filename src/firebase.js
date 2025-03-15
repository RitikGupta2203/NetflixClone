// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB0jSJ9ZXWE8kYrrUrvl5FJxdhJP2F7X0",
  authDomain: "netflix-clone-e06e0.firebaseapp.com",
  projectId: "netflix-clone-e06e0",
  storageBucket: "netflix-clone-e06e0.firebasestorage.app",
  messagingSenderId: "802568113592",
  appId: "1:802568113592:web:4d0fa7741acbbe54f8534d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Intialise the firebase authentication
const auth = getAuth(app);

const db = getFirestore(app);

//creating functions

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Storing user in Firebase database
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    toast.success("Signup Successful");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login Successful");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
