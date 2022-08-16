import { addDoc ,serverTimestamp} from "firebase/firestore/lite";
import {roomColRef} from "helper/Firebase";
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
   
 
    addDoc(roomColRef, {
        created: serverTimestamp(),
        roomId: roomId,
        users: [{ player1: "faruk" }]
    });
    return roomId;
}
export default CreateRoom;
