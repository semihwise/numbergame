import { addDoc ,serverTimestamp,collection} from "firebase/firestore/lite";
import firebase from "./Firebase";
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));}
    return result;
}
const roomId = makeid(5);
const CreateRoom =()=> { 


    const roomColRef = collection(firebase, 'rooms')

 
    addDoc(roomColRef, {
        created: serverTimestamp(),
        roomId: roomId,
        users: [{ player1: "faruk" }]
    });
    return roomId;
}
export default CreateRoom;
