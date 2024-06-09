import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_9OgLbD5rsbjjC49FUjvWKRf6K5XBpD8",
  authDomain: "prada-abb76.firebaseapp.com",
  projectId: "prada-abb76",
  storageBucket: "prada-abb76.appspot.com",
  messagingSenderId: "1002327330326",
  appId: "1:1002327330326:web:eb9bff5338413c3252ef37",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;
