import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBcwpitLqmJcgx70vFOTgqsHWRS3sNKyo",
  authDomain: "blog-d4cd9.firebaseapp.com",
  projectId: "blog-d4cd9",
  storageBucket: "blog-d4cd9.appspot.com",
  messagingSenderId: "83689338465",
  appId: "1:83689338465:web:d1d0bc487ad26989999c20",
  measurementId: "G-KYQ3ZE0Z98"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
