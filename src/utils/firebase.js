import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useGame } from "context";
import { 
    addDoc, 
    serverTimestamp, 
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    setDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCz_J1_EZxVFtTHM__osvVWkTgeb9hPHKQ",
    authDomain: "number-game-88cab.firebaseapp.com",
    projectId: "number-game-88cab",
    storageBucket: "number-game-88cab.appspot.com",
    messagingSenderId: "765188451369",
    appId: "1:765188451369:web:d463272b0307c7b3e5c038",
    measurementId: "G-W38ZZYHERS"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const roomColRef = collection(db, 'rooms');
