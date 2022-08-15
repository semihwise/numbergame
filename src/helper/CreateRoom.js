// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { 
//     addDoc, 
//     serverTimestamp, 
//     getFirestore,
//     collection,
//     getDocs,
//     getDoc,
//     doc,
//     setDoc} from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCz_J1_EZxVFtTHM__osvVWkTgeb9hPHKQ",
//     authDomain: "number-game-88cab.firebaseapp.com",
//     projectId: "number-game-88cab",
//     storageBucket: "number-game-88cab.appspot.com",
//     messagingSenderId: "765188451369",
//     appId: "1:765188451369:web:d463272b0307c7b3e5c038",
//     measurementId: "G-W38ZZYHERS"
// };
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
// const roomColRef = collection(db, 'rooms')

const roomId = makeid(5);
function makeid(length){
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const CreateRoom =()=> {
    // addDoc(roomColRef, {
    //     created: serverTimestamp(),
    //     roomId: roomId,
    //     users: [{ player1: "faruk" }]
    // });
    return roomId;
}
export default CreateRoom;
