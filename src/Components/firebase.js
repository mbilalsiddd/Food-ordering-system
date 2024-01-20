// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxsyFKayvaZWzRPrE4_ALbzPECVGemU0c",
  authDomain: "dbmsproject-8b542.firebaseapp.com",
  projectId: "dbmsproject-8b542",
  storageBucket: "dbmsproject-8b542.appspot.com",
  messagingSenderId: "535892393994",
  appId: "1:535892393994:web:6eb3020874d8decc00dff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};