import { useGame } from "context";
import CreateRoom from "helper/CreateRoom";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Home = () =>  {
    const {setRoomId}=useGame();
    const roomId= CreateRoom();
    const navigate = useNavigate();
    const handleClick = (e)=>{
        e.preventDefault();
        
        setRoomId(roomId);
        navigate("new-game");
        console.log(roomId);
   
    }
    return (
        <>
            <Card.Title>Select Game Type</Card.Title>
            <div className="d-grid gap-2">
                <Button variant="info"  style={ { width: "100%" } } onClick={handleClick}>New Game</Button>
        
                <Link to="/join-game">
                    <Button variant="secondary" style={ { width: "100%" } }>Join Game</Button>
                </Link>
                <Link to="/single-game">
                    <Button variant="dark" style={ { width: "100%" } }>Single Player</Button>
                </Link>
            </div>
        </>
    )
}

export default Home;
