import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, updateDoc, doc, increment } from 'firebase/firestore'
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDvRoWoEBdqdS85YJApVdKG5KcPOYzOg6k",
  authDomain: "studio-6082148059-d1fec.firebaseapp.com",
  projectId: "studio-6082148059-d1fec",
  storageBucket: "studio-6082148059-d1fec.firebasestorage.app",
  messagingSenderId: "144415804580",
  appId: "1:144415804580:web:c254f5bd7dc09170186a31"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { 
  db, auth, 
  collection, addDoc, query, orderBy, onSnapshot, serverTimestamp,
  updateDoc, doc, increment,
  signInAnonymously, onAuthStateChanged 
}
