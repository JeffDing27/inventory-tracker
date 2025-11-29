// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlpZuehpvyzwPoI91WwZ1GCMlR17ggshU",
  authDomain: "inventory-managment-e8d1a.firebaseapp.com",
  projectId: "inventory-managment-e8d1a",
  storageBucket: "inventory-managment-e8d1a.firebasestorage.app",
  messagingSenderId: "1017352987930",
  appId: "1:1017352987930:web:13be1317eceb0bd832b8a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
