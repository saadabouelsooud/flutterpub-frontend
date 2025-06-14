// Auto-generated Firebase initialization with analytics
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFqNhXsxXlZXgBNHKtnZqgH_vQQZcIF8w",
  authDomain: "flutterpub-web.firebaseapp.com",
  projectId: "flutterpub-web",
  storageBucket: "flutterpub-web.firebasestorage.app",
  messagingSenderId: "675649620325",
  appId: "1:675649620325:web:33d71240457b2c83aa398c",
  measurementId: "G-Z0PKF6KX7Z"
};

// Initialize Firebase if not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const analytics = getAnalytics(app);
export default app;
