import { initializeApp } from "firebase/app";
import { collection, getFirestore} from 'firebase/firestore/lite';

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
export const db = getFirestore(app);

export const roomColRef = collection(db, 'rooms')
