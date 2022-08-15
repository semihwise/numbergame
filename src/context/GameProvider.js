import { createContext, useContext, useState } from "react";
import Firebase from 'utils/firebase';
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
  
  
    const value = {
        roomId,
        digits,
        userValue,
        username,
      
        secretNumber,
        setDigits,
        setUserValue,
        setUsername,

        setSecretNumber,
        setRoomId,
       
    };

   
  
    return <GameContext.Provider value={ value }>{ children }</GameContext.Provider>;
}
