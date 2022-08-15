
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

import { useGame } from "context";
import { useNavigate } from "react-router-dom";
import ChangeName from "components/ChangeName";
const Page = () => {
    const { 
        setSecretNumber, 
        setUserValue,
        username,
        digits 
    } = useGame();
    const[ value,setValue] = useState("")
    const[roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();
    const secretNumber = Array.from((value), Number);
    function handleSubmit(e) {
        e.preventDefault();
        if (!username)
            return;
        setUserValue(username);
        navigate("game");
        setSecretNumber(secretNumber);
    }
    return (
        <>
            <Form  onSubmit={ handleSubmit }>
                <ChangeName/> 
                <Form.Group className="mb-3">
                    <Form.Label> Room Code: </Form.Label>
                    <Form.Control required autoComplete="off" placeholder="Enter Room Code"
                        value={ roomCode }
                        onChange={ (e) => setRoomCode(e.target.value) }/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>{ digits } digits Secret Number</Form.Label>
                    <Form.Control type="text" placeholder="What's your secret number" 
                        value={ value }//BU SECRET NUMBER KARŞIYA GİTCEK
                        onChange={(e)=> setValue((e.target.value))}/>
                </Form.Group>
                <Button variant="dark" type="submit">Join Game</Button>
            </Form>
        </>
    );
}
export default Page;
