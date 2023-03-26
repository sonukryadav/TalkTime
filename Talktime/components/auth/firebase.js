import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ7WU1jiuzlrbDeZfH0B4oYVIKGfAE4GE",
  authDomain: "talktime-15cc8.firebaseapp.com",
  projectId: "talktime-15cc8",
  storageBucket: "talktime-15cc8.appspot.com",
  messagingSenderId: "108468475423",
  appId: "1:108468475423:web:c1744fc7ef7e85acc8672a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}