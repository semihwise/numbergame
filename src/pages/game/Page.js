

import { useGame } from "context";
import { createContext,useContext, useState } from "react";
import NumbrBtns from "components/NmbrBtns";
import Guess from "components/Guess";
import { Button } from "react-bootstrap";

const Page = () => {
    const { items,setItems,showNumb,setShowNumb,userValue ,secretNumber} = useGame();
    return (  
        <div > 
         
            <NumbrBtns/>
            <p>  {userValue}  </p>
            <Button 
                onClick={() => [setShowNumb(secretNumber)]} 
                type="button"  
                variant="light" >  
                {showNumb} </Button>

            <ol>{items.map((guess, index) => (<li  key={index} > 
                <Guess
                    index={index}
                    guess={guess}
                    key={index} /> </li>))}</ol>
        </div>
    );
}
export default Page;
   