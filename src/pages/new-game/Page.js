
import { collection,increment, query, where,getDocs, onSnapshot, updateDoc, doc, arrayUnion } from "@firebase/firestore";
import ChangeName from "components/ChangeName";
import SetDigits from "components/SetDigits";
import { useGame } from "context";
import CreateRoom from "helper/CreateRoom";
import { db, roomColRef,roomDocRef } from "helper/Firebase";
import { useEffect, useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Page = () => {
    const scroll = useRef()
    const roomId = CreateRoom();
    const navigate = useNavigate();
    const [isCopied, setIsCopied] = useState(false);
    const[ value,setValue] = useState("")
    const {users,setUsers, setUserValue,username, setDigits, digits,setSecretNumber, setRivalName} = useGame();
    const secretNumber = Array.from((value), Number);

    const q = query(roomColRef, where("roomId", "==",  roomId))
    const updateUser = async() => {
        const data = await getDocs(q);
        let getId;
        const player1 = {
            username: username, 
            number: secretNumber,
            guesses: []
        }
        data.forEach((doc) => {
            getId = doc.id;
        })
        const docRef = doc(roomColRef, getId)
        const unsub = onSnapshot(docRef, (doc) => {
            if (doc.data().players.length == 1){ navigate("waiting-room")}
            if (doc.data().players.length ==2){ 
                setRivalName(doc.data().players[1].username)
                setSecretNumber(doc.data().players[1].number)
                navigate(roomId);
            }
        });
          
        await updateDoc(docRef,{
            numberOfPlayers: 1,
            digits: digits,
            players: arrayUnion(player1)
        })
        .then({unsub}) 
        .catch(error => {
            console.log(error);
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username)
            return;
        setUserValue(username);
        updateUser();

    };
    
    const copyTextToClipboard = async (text) => {
        if ("clipboard" in navigator) return await navigator.clipboard.writeText(text);
        return document.executeCommand("copy", true, text);
    };

    const handleCopyClick = () => {
        copyTextToClipboard(roomId)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            });
    };

    return (
        <>
            <Card.Title>Game Settings</Card.Title>

            <Form onSubmit={ handleSubmit }>
                <div className="d-grid gap-2"> 
                    <Button value={roomId}variant="secondary">{ roomId}</Button>
                    <Button  variant="info" onClick={ handleCopyClick }>
                        { isCopied ? "Copied!" : "Share" }
                    </Button>
                    <ChangeName />
                    <SetDigits />
                    <Form.Group className="mb-3">
                        <Form.Label>{ digits } digits Secret Number</Form.Label>
                        <Form.Control type="text" placeholder="What's your secret number" 
                            value={ value }
                            onChange={ (e)=> setValue((e.target.value)) }
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit">Join Game</Button>
                </div>
            </Form>
        </>
    );
};

export default Page;