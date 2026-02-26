import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAI, getGenerativeModel } from 'firebase/ai';

const firebaseConfig = {
  apiKey: "AIzaSyDvRoWoEBdqdS85YJApVdKG5KcPOYzOg6k",
  authDomain: "studio-6082148059-d1fec.web.app",
  projectId: "studio-6082148059-d1fec",
  storageBucket: "studio-6082148059-d1fec.appspot.com",
  messagingSenderId: "144415804580",
  appId: "1:144415804580:web:7e6465f633e54e8e186a31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export { getAI, getGenerativeModel };