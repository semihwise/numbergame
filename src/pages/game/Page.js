import { useGame } from "context";
import { createContext,useContext, useState } from "react";
import NumbrBtns from "components/NmbrBtns";
import Guess from "components/Guess";
import { Button } from "react-bootstrap";
const PlayContext = createContext();
export function usePlay() {
    return useContext(PlayContext);}
const Page = () => {
    const { userValue ,secretNumber} = useGame();
    const [items, setItems] = useState([]);
    const [showNumb,setShowNumb] = useState("****");
    const value = {items,setItems,showNumb,setShowNumb};

    return (    
        <PlayContext.Provider value={ value }> 
            <div className='GameScreen'> 
                Player: {userValue}
                <NumbrBtns/>
                <Button onClick={() => [setShowNumb(secretNumber)]} type="button"  variant="light" >  {showNumb}</Button>
                <ol>{items.map((guess, index) => (<li  key={index} > 
                    <Guess
                        index={index}
                        guess={guess}
                        key={index} /> </li>))}</ol>
            </div>
        </PlayContext.Provider>
    );
}
export default Page;
   


