import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
})


// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const personsRef = collection(db, 'persons')


