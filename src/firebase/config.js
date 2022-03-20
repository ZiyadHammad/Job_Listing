import { initializeApp} from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_ZSqgiKgz6qQ3za6iWX12SAY_HjeY5aE",
  authDomain: "job-listing-7c4fb.firebaseapp.com",
  projectId: "job-listing-7c4fb",
  storageBucket: "job-listing-7c4fb.appspot.com",
  messagingSenderId: "592339407877",
  appId: "1:592339407877:web:13c68d9061e44e665ab86c",
  measurementId: "G-SVJJSXZG4D"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

// collection reference
const colRef = collection(db, "jobs")

// get collection data


  export {getDocs, colRef, db}