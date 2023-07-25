// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env);
// console.log(process.env);

const env = getEnvironments();
console.log(env);

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAzIezw9D2d05vfboj8N460U1ziPNP_1GM",
//   authDomain: "react-cursos-fh-51f42.firebaseapp.com",
//   projectId: "react-cursos-fh-51f42",
//   storageBucket: "react-cursos-fh-51f42.appspot.com",
//   messagingSenderId: "811245014916",
//   appId: "1:811245014916:web:d817f06d057ee3826997d1",
// };

//Testing
const firebaseConfig = {
  apiKey: "AIzaSyAohiw7YeWfeHsg9yOAiSSpNysGQVPPQnQ",
  authDomain: "react-cursos-fh-testing.firebaseapp.com",
  projectId: "react-cursos-fh-testing",
  storageBucket: "react-cursos-fh-testing.appspot.com",
  messagingSenderId: "809898106191",
  appId: "1:809898106191:web:be9342863043aff9ffb93a",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
