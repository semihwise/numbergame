
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
    onSnapshot,
    doc,
    getDocs ,
    updateDoc , 
    query,where,
    arrayUnion,
    increment} 
    from "firebase/firestore";
import { useGame } from "context";
import { useNavigate } from "react-router-dom";
import ChangeName from "components/ChangeName";
import {roomColRef} from "helper/Firebase";

const Page = () => {
    const { 
        setUserValue,
        username,
        roomCode,
        digits
    } = useGame();
    const[ value,setValue] = useState("")
    const navigate = useNavigate();
    const secretNumber = Array.from((value), Number);

    const querySnapshot = async () => { 

        
        const q = query(roomColRef, where("roomId", "==",  roomCode))
        const data = await getDocs(q);
        let getId;
 
        const player2 = {
            username: username, 
            number: secretNumber,
            guesses: []
        }
        data.forEach((doc) => { 
            getId = doc.id;
        
        })
        const docRef = doc(roomColRef, getId)

        const unsub = onSnapshot(docRef, (doc) => {
            navigate(roomCode)
        });
        await updateDoc(docRef,{
            numberOfPlayers: increment(1),
            players: arrayUnion(player2)
        }).then({unsub})
    };
    function handleSubmit(e) {
        e.preventDefault();
        if (!username)
            return;
        setUserValue(username);
        querySnapshot();

    }
    return (
        <>
            <Form  onSubmit={ handleSubmit }>
                <ChangeName/> 
                <Form.Group className="mb-3">
                    <Form.Label>game is playing with {digits} digits Secret Number</Form.Label>   
                    <Form.Control type="text" placeholder="write your secret number" 
                        value={ value }
                        onChange={(e)=> setValue((e.target.value))}/>
                </Form.Group>
        
                <Button variant="dark" type="submit">Join Game</Button>
            </Form>
 
            
            
        </>
    );
}
export default Page;
