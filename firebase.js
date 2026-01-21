import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDly0l8dCfDVRWjmneiG4GciN8R5W8eCdI",
  authDomain: "vibha-portfolio.firebaseapp.com",
  projectId: "vibha-portfolio",
  storageBucket: "vibha-portfolio.firebasestorage.app",
  messagingSenderId: "602583403273",
  appId: "1:602583403273:web:97bbf5b58c62c8d15a61d8",
  measurementId: "G-VLX68L6HFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ THIS EXPORT IS MANDATORY
export const db = getFirestore(app);