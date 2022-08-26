
import { useGame } from "context";
import { doc, setDoc ,serverTimestamp, Timestamp} from "firebase/firestore";
import { roomDocRef,roomColRef } from "./Firebase";

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
    const {digits,username,secretNumber} = useGame();
    const data = {
        created: serverTimestamp(),
        roomId: roomId,
        digits: digits,
        players: []



        

    }
    setDoc(roomDocRef, data);


    return roomId;
}
export default CreateRoom;