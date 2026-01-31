// Firebase core
import { initializeApp } from "firebase/app";

// Firebase auth
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Firebase config (loaded from environment variables)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Init Auth
const auth = getAuth(app);

// Helper functions (clean + reusable)
export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signup = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export { auth };
