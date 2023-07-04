import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO5FV8AHDSMQ4UMqrXWLH9zbmP33-7YyU",
  authDomain: "nacoblog-c1276.firebaseapp.com",
  projectId: "nacoblog-c1276",
  storageBucket: "nacoblog-c1276.appspot.com",
  messagingSenderId: "864504699723",
  appId: "1:864504699723:web:0d19e5d6089460190666ce",
  measurementId: "G-LYYT7J41YS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
