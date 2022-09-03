// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v4-d8a9a.firebaseapp.com",
  projectId: "twitter-v4-d8a9a",
  storageBucket: "twitter-v4-d8a9a.appspot.com",
  messagingSenderId: "600506651378",
  appId: "1:600506651378:web:e0afe90720f7a4cfd3f66b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage};