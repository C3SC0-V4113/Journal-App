// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzIezw9D2d05vfboj8N460U1ziPNP_1GM",
  authDomain: "react-cursos-fh-51f42.firebaseapp.com",
  projectId: "react-cursos-fh-51f42",
  storageBucket: "react-cursos-fh-51f42.appspot.com",
  messagingSenderId: "811245014916",
  appId: "1:811245014916:web:d817f06d057ee3826997d1",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
