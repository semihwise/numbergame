import ChangeName from "components/ChangeName";
import SetDigits from "components/SetDigits";
import SecretNumCreator from "helper/secret";
import { useGame } from "context";  
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
const Page = () => {
    const {setUserValue, username, digits, setSecretNumber} = useGame();
    const navigate = useNavigate();
    const secretNumber = SecretNumCreator(digits);
    const handleSubmit = (e)=> {
        e.preventDefault();
        if (!username)
            return;
        setUserValue(username);
        navigate("game");
        console.log("digits:",digits);
        console.log( "sss:",secretNumber);
        setSecretNumber(secretNumber);
    }
    return ( 
        <>
            <Form  onSubmit={ handleSubmit }>
                <ChangeName /><br/>
                <SetDigits />
                <Button variant="dark" type="submit"> Start Game </Button>
            </Form>
        </>
    );
}
export default Page;
