import { Button, Form } from "react-bootstrap";

import { doc,increment, getDocs, updateDoc, where,query, onSnapshot } from "firebase/firestore";
import { roomColRef } from "helper/Firebase";
import { useNavigate } from "react-router-dom";

import { useGame } from "context";




const RoomIdConfig = ()=> {
    const{roomCode,setRoomCode,setDigits,setRivalName,setSecretNumber} = useGame()
    const navigate = useNavigate()
   

    const handleSubmit = async (e) => {
        e.preventDefault();

        const q = query(roomColRef, where("roomId", "==",  roomCode))
        const data = await getDocs(q);
        let getId;
   
        data.forEach((doc) => { 
           getId = doc.id;
        })
      
        const docRef = doc(roomColRef, getId)
        const unsub = onSnapshot(docRef, (doc) => {
            if (doc.data().players.length == 0){
                navigate("waiting-room")}
            if (doc.data().players.length ==1){
                setRivalName(doc.data().players[0].username)
                setSecretNumber(doc.data().players[0].number)
                setDigits(doc.data().digits)
                navigate("join-game")}
        });
        await updateDoc(docRef,{
            numberOfPlayers: increment(1),
        }).then({unsub})
        .catch(error => {
            console.log(error);
        })
    } 
    return ( 
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label> Room Code: </Form.Label>
                <Form.Control required autoComplete="off" placeholder="Enter Room Code"
                    value={ roomCode }
                    onChange={ (e) => setRoomCode(e.target.value) }/>
                <Button type="submit" > Join Room </Button>
            </Form.Group>
        </Form>

        
        </>


    )
    


}

export default RoomIdConfig;