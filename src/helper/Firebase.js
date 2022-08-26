


import { useGame } from "context";
import { initializeApp } from "firebase/app";
import {
    collection,
    getFirestore,
    getDoc,
    updateDoc,
    doc,
    where,
    query,
    getDocs
   } from 'firebase/firestore';
   
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
const roomColRef = collection(db, "rooms")
const roomDocRef = doc(roomColRef);


export { db ,roomColRef, roomDocRef}
