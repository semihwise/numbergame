
import ChangeName from "components/ChangeName";
import SetDigits from "components/SetDigits";
import { useGame } from "context";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Firebase from 'utils/firebase';

const Page = () => {

    const navigate = useNavigate();
    const [isCopied, setIsCopied] = useState(false);
    const[ value,setValue] = useState("")
    const { setUserValue,username, digits,roomId,setSecretNumber} = useGame();
    const secretNumber = Array.from((value), Number);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username)
            return;
        setUserValue(username);
        navigate("game");
        setSecretNumber(secretNumber);
        console.log( "sss:",secretNumber);
        console.log(digits);

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
