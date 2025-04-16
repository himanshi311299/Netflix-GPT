// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCet_6dEFaIyUsVBsLcEy7C21QidXQZObM",
  authDomain: "netflix-gpt-e7bd7.firebaseapp.com",
  projectId: "netflix-gpt-e7bd7",
  storageBucket: "netflix-gpt-e7bd7.firebasestorage.app",
  messagingSenderId: "676010403357",
  appId: "1:676010403357:web:89a95ef1ce5e2324a448f4",
  measurementId: "G-X829L99JHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();