import { createContext, useContext, useState } from "react";
const GameContext = createContext();
export function useGame() {
    return useContext(GameContext);
}
export function GameProvider({ children }) {
    const [roomId, setRoomId] = useState("");
    const [userValue, setUserValue] = useState("");
    const [secretNumber, setSecretNumber] = useState("");
    const [username,setUsername] = useState("");
    const [digits,setDigits] = useState(4);
    const [users, setUsers] = useState([]);
    const[roomCode, setRoomCode] = useState("");
    const [items, setItems] = useState([]);
    const [showNumb,setShowNumb] = useState("****");
    const [rivalname,setRivalName] = useState("");
    const value = {
        roomId,
        items,
        showNumb,
        roomCode,
        users,
        digits,
        userValue,
        username,
        secretNumber,
        setDigits,
        setUserValue,
        setUsername,
        setSecretNumber,
        setRoomId,
        setUsers,
        setRoomCode,
        setItems,
        setShowNumb,
        rivalname,
        setRivalName

    };

   
  
    return <GameContext.Provider value={ value }>{ children }</GameContext.Provider>;
}
