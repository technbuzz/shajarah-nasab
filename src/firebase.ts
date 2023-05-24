import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCxbe_9k1n1YXGvzvmC0RNnuoap7Jsjm4A",
  authDomain: "family-tree-93abc.firebaseapp.com",
  projectId: "family-tree-93abc",
  storageBucket: "family-tree-93abc.appspot.com",
  messagingSenderId: "769300472930",
  appId: "1:769300472930:web:f7699e0dd3dcfec6639d3b",
  measurementId: "G-56D2EB8JVH"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const personsRef = collection(db, 'persons')
