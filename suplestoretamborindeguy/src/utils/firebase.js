// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfC9E0OUa6NbhUACCdx7Ej_HWKCOvxQcY",
  authDomain: "suplestore-d02c4.firebaseapp.com",
  projectId: "suplestore-d02c4",
  storageBucket: "suplestore-d02c4.appspot.com",
  messagingSenderId: "582809712409",
  appId: "1:582809712409:web:b93e50088372501acb3788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)