import { useGame } from "context";
import { doc,increment, getDocs, updateDoc, where,query } from "firebase/firestore";
import { roomColRef } from "./Firebase";

import { useNavigate } from "react-router-dom";

const RoomRef =   () => { 
    const navigate = useNavigate()
    const{roomCode, digits,setRoomCode} = useGame()


    const querySnapshot = async () => {
  
     
        const q = query(roomColRef, where("roomId", "==",  roomCode))
       const data = await getDocs(q);
       
       let getId;
       data.forEach((doc) => { 
           getId = doc.id;
      
       })

  

       const docRef = doc(roomColRef, getId)
       await updateDoc(docRef,{
        numberOfPlayers: increment(1),
        }).then(() => {
            navigate("join-game")

            console.log("Entire Document has been updated successfully");
        })
        .catch(error => {
            console.log(error);
      })
    } 

}
export default RoomRef;
